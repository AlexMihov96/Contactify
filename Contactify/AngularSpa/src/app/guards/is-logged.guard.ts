import {Injectable} from '@angular/core'
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {BaseService} from '../services/base.service'
import {Modal} from 'angular2-modal/plugins/bootstrap'
import {SettingsService} from "../services/system-services/settings.service";
import {LocalStorageService} from "../services/system-services/local-storage.service";
import {AuthenticationService} from "../services/system-services/authentication.service";
import {Resources} from "../constants/resources-en";

@Injectable()

export class IsLoggedGuard implements CanActivate {

  constructor(private router: Router,
              private settingsService: SettingsService,
              private localStorageService: LocalStorageService,
              private authService: AuthenticationService,
              private baseService: BaseService,
              modal: Modal) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkIsLoggedIn()
  }

  checkIsLoggedIn(): boolean {
    let token = this.localStorageService.retrieve(this.settingsService.tokenStorageKey, false)

    if (token == null || token == undefined) {
      return true
    }

    if (this.authService.redirectUrl) {
      this.router.navigate([this.authService.redirectUrl])
    }
    else {
      this.router.navigate(['home'])
    }

    return false
  }
}
