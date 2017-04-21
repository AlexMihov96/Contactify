// import {Component} from "@angular/core";
//
// @Component({
//   templateUrl: 'login.component.html',
//   styleUrls: ['login.css']
// })
//
// export class LoginComponent {
//
// }

import {Component, ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';
import {Modal} from 'angular2-modal/plugins/bootstrap';
import {AuthenticationService} from "../../services/authentication.service";
import {LocalStorageService} from "../../services/local-storage.service";
import {SettingsService} from "../../services/settings.service";
import {BaseService} from "../../services/base.service";
import {ITokenResult} from "../../models/view-models/token-result";

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  private model: any = {}
  private authenticationService: AuthenticationService
  private router: Router
  private loginError;

  constructor(authenticationService: AuthenticationService,
              router: Router,
              private localStorageService: LocalStorageService,
              private settingsService: SettingsService,
              // modal: Modal,
              private baseService: BaseService,
              private ref: ChangeDetectorRef) {

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

          let userInfo = this.authenticationService.extractUserInfo(token);
          this.localStorageService.store(this.settingsService.tokenStorageKey, token, true);
          this.localStorageService.store(this.settingsService.userStorageKey, userInfo, true);
          this.authenticationService.tryNavigate();
          this.ref.markForCheck();
        },
        error => {
          if (error !== "Invalid username or password.") {
            this.baseService.showAlert('Oops! Something went wrong');
          }
          else {
            this.loginError = "Invalid username or password."
          }
          this.ref.markForCheck();
        })
  }

  logout() {
    this.getAuthenticationService.logout()
    this.getRouter.navigate(['login'])
  }
}
