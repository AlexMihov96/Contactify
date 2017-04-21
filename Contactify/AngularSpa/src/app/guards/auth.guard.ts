import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {SettingsService} from '../services/settings.service';
import {LocalStorageService} from '../services/local-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private settingsService: SettingsService,
              private localStorageService: LocalStorageService,
              private authService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    let isLoggedIn = this.localStorageService.retrieve(this.settingsService.tokenStorageKey, true);
    if (isLoggedIn) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    // Navigate to the login page with extras
    this.router.navigate(['login']);
    return false;
  }
}
