import { Injectable } from "@angular/core"
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"
import { Store } from "@ngrx/store"

import "rxjs/add/operator/let"
import { RootState } from "../../store/state/root-state"
import { selectAuthIsLoggedIn } from "../../store/reducers"

@Injectable()

export class IsLoggedGuard implements CanActivate {
  private isLoggedIn: boolean = false

  constructor(private router: Router,
              private store: Store<RootState>) {
    this.store
      .select<boolean>(selectAuthIsLoggedIn)
      .subscribe((isLoggedIn: boolean) => this.isLoggedIn = isLoggedIn)
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkIsLoggedIn(state.url)
  }

  private checkIsLoggedIn(url: string): boolean {
    if (!this.isLoggedIn) {
      return true
    }

    this.router.navigate([""])

    return false
  }
}
