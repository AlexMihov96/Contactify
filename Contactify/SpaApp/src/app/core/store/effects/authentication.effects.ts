import { Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { Action, Store } from '@ngrx/store'
import { Actions, Effect } from '@ngrx/effects'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/do'
import { AuthService } from "../../services"
import { RootState } from "../state/root-state"
import { ToastrService } from "../../services/dialogs"
import { AuthenticationActions } from "../actions/authentication.actions"
import { selectAuthRedirectUrl } from "../reducers"

@Injectable()

export class AuthenticationEffects {
  constructor(private authService: AuthService,
              private actions$: Actions,
              private router: Router,
              private store$: Store<RootState>,
              private toastr: ToastrService) {
  }

  @Effect() login$: Observable<Action> = this.actions$
    .ofType(AuthenticationActions.LOGIN)
    .switchMap((action: AuthenticationActions.LoginAction) =>
      this.authService.login(action.payload.username, action.payload.password))
    .map(data => new AuthenticationActions.LoginSuccessAction(data)
    )
    .catch(() => Observable.of({type: 'LOGIN_FAILED'}))

  @Effect() register$: Observable<Action> = this.actions$
    .ofType(AuthenticationActions.REGISTER)
    .switchMap((action: AuthenticationActions.RegisterAction) =>
      this.authService.register(action.payload))
    .map(data => {

      this.toastr.showSuccess("You have successfully registered", false)
      this.router.navigate(['/login'])

      return new AuthenticationActions.RegisterSuccessAction(data)
    })
    .catch((err) => Observable.of(new AuthenticationActions.RegisterFailedAction(err)))

  @Effect({dispatch: false}) loginSuccess$: Observable<Action> = this.actions$
    .ofType(AuthenticationActions.LOGIN_SUCCESS)
    .do(() => {
      let url: string

      //TODO: find a better way to get the state
      this.store$
        .select<string>(selectAuthRedirectUrl)
        .subscribe((redirectUrl: string) => {
          url = redirectUrl
        })

      this.router.navigate([url])
    })

  @Effect({dispatch: false}) logout$: Observable<Action> = this.actions$
    .ofType(AuthenticationActions.LOGOUT)
    .do(() => {
      this.router.navigate(['login'])
    })

  @Effect({dispatch: false}) routeNotAuthorized$: Observable<Action> = this.actions$
    .ofType(AuthenticationActions.ROUTE_NOT_AUTHORIZED)
    .do(action => {
      this.toastr.showInfo('general.sessionExpired')
      this.router.navigate(['login'])
    })
}
