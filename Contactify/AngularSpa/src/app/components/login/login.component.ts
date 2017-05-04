import {Modal} from 'angular2-modal/plugins/bootstrap';
import {Resources} from "../../constants/resources-en";
import {ChangeDetectorRef, Component} from "@angular/core";
import {BaseComponent} from "../base.component";
import {AuthenticationService} from "../../services/system-services/authentication.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../services/system-services/local-storage.service";
import {SettingsService} from "../../services/system-services/settings.service";
import {BaseService} from "../../services/base.service";
import {ITokenResult} from "../../models/system-models/token-result";
import {IUserInfoResult} from "../../models/system-models/user-info-result";

@Component({
  templateUrl: './login.component.html',
  styleUrls: [`./login.component.css`]
})

export class LoginComponent extends BaseComponent {
  private model: any = {}
  private authenticationService: AuthenticationService
  private router: Router
  private loginError

  constructor(authenticationService: AuthenticationService,
              router: Router,
              private localStorageService: LocalStorageService,
              private settingsService: SettingsService,
              modal: Modal,
              private baseService: BaseService,
              private ref: ChangeDetectorRef) {
    super(modal)

    this.setAuthenticationService = authenticationService
    this.setRouter = router
  }

  get getAuthenticationService(): AuthenticationService {
    return this.authenticationService;
  }

  get getRouter(): Router {
    return this.router
  }

  set setAuthenticationService(value: AuthenticationService) {
    this.authenticationService = value
  }

  set setRouter(value: Router) {
    this.router = value
  }

  login() {
    this.getAuthenticationService.login(this.model.username, this.model.password)
      .subscribe((token: ITokenResult) => {
          // calculate expiry date and save result
          if (token.expires_in) {
            token.expires_on = this.authenticationService.calculateExpirationDate(+token.expires_in);
          }

          let userInfo = this.authenticationService.extractUserInfo(token)

          this.localStorageService.store(this.settingsService.tokenStorageKey, token, false)
          this.localStorageService.store(this.settingsService.userStorageKey, userInfo, false)

          this.authenticationService.tryNavigate()
          this.ref.markForCheck()
        },
        error => {
          if (error !== Resources.invalidCredentials) {
            this.baseService.displayError(Resources.oops)
          }
          else {
            this.loginError = Resources.invalidCredentials
          }
          this.ref.markForCheck()
        })
  }

  logout() {
    this.getAuthenticationService.logout()

    this.getRouter.navigate(['login'])
  }
}
