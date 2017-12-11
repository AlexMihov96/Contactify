import "rxjs/add/operator/let"
import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router"
import { Store } from "@ngrx/store"
import { RootState } from "../../store/state/root-state"
import { selectAuthIsLoggedIn } from "../../store/reducers"
import { AuthenticationActions } from "../../store/actions/authentication.actions"

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild {
  private isLoggedIn: boolean = false

  constructor(private router: Router,
              private store$: Store<RootState>) {
    this.store$
      .select<boolean>(selectAuthIsLoggedIn)
      .subscribe((isLoggedIn: boolean) => this.isLoggedIn = isLoggedIn)
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkIsLoggedIn(state.url)
  }

  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkIsLoggedIn(state.url)
  }

  private checkIsLoggedIn(url: string): boolean {
    if (this.isLoggedIn) {
      return true
    }

    this.store$.dispatch(new AuthenticationActions.RouteNotAuthorizedAction(url))

    return false
  }
}
