import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { AuthService } from '../../services/authentication/auth.service'
import { StorageService } from '../../services/authentication/storage.service'
import { constants } from "../../../constants/constants"

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private localStorageService: StorageService,
              private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url

    return this.checkLogin(url)
  }

  checkLogin(url: string): boolean {
    let isLoggedIn = this.localStorageService.retrieve(constants.tokenStorageKey)

    if (isLoggedIn) {
      return true
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url
    // Navigate to the login page with extras
    this.router.navigate(['login'])

    return false
  }
}
