import { Component } from "@angular/core"
import { BaseComponent } from "../../base.component"
import { AuthService } from "../../../core/services/authentication/auth.service"
import { TokenResult } from "../../../core/interfaces/token-result"
import { StorageService } from "../../../core/services/authentication/storage.service"
import { constants } from "../../../constants/constants"
import { Router } from "@angular/router"

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent extends BaseComponent {
  private model: any = {}

  constructor(private authService: AuthService,
              private storageService: StorageService,
              private router: Router) {
    super()
  }

  login() {
    this.authService.login(this.model.username, this.model.password)
      .subscribe((token: TokenResult) => {
          // calculate expiry date and save result
          if (token.expires_in) {
            token.expires_on = this.authService.calculateExpirationDate(+token.expires_in)
          }

          let userInfo = this.authService.extractUserInfo(token)

          this.storageService.store(constants.tokenStorageKey, token)
          this.storageService.store(constants.userStorageKey, userInfo)

          this.authService.tryNavigate()
        }
        //TODO: error => {
        //   if (error !== Resources.invalidCredentials) {
        //     this.baseService.displayError(Resources.oops)
        //   }
        //   else {
        //     this.loginError = Resources.invalidCredentials
        //   }
        // }
      )
  }
}
