import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { StorageService } from "../../services/authentication/storage.service"
import { AuthService } from "../../services/authentication/auth.service"
import { constants } from "../../../constants/constants"

@Injectable()

export class IsLoggedGuard implements CanActivate {

  constructor(private router: Router,
              private localStorageService: StorageService,
              private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkIsLoggedIn()
  }

  checkIsLoggedIn(): boolean {
    //TODO: implement store logged in!
    let token = this.localStorageService.retrieve(constants.tokenStorageKey)

    if (token === null) {
      return true
    }

    if (this.authService.redirectUrl) {
      this.router.navigate([this.authService.redirectUrl])
    }
    else {
      this.router.navigate(['/'])
    }

    return false
  }
}
