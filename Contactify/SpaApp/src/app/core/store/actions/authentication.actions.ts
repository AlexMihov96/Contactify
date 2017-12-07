import { Action } from '@ngrx/store'
import { RegisterUserInputModel } from "../../models/input-models/register.input-model"

export namespace AuthenticationActions {
  export const LOGIN = 'LOGIN'
  export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
  export const LOGIN_FAILED = 'LOGIN_FAILED'
  export const REGISTER = 'REGISTER'
  export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
  export const REGISTER_FAILED = 'REGISTER_FAILED'
  export const LOGOUT = 'LOGOUT'
  export const ROUTE_NOT_AUTHORIZED = 'ROUTE_NOT_AUTHORIZED'

  export class LoginAction implements Action {
    readonly type = LOGIN

    constructor(public payload: { username: string, password: string }) {
    }
  }

  export class LoginSuccessAction implements Action {
    readonly type = LOGIN_SUCCESS

    constructor(public payload: any) {
    }
  }

  export class LoginFailedAction implements Action {
    readonly type = LOGIN_FAILED

    constructor(public payload: any) {
    }
  }

  export class LogoutAction implements Action {
    readonly type = LOGOUT
  }

  export class RouteNotAuthorizedAction implements Action {
    readonly type = ROUTE_NOT_AUTHORIZED

    constructor(public payload: string) {
    }
  }

  export class RegisterAction implements Action {
    readonly type = REGISTER

    constructor(public payload: RegisterUserInputModel) {
    }
  }

  export class RegisterSuccessAction implements Action {
    readonly type = REGISTER_SUCCESS

    constructor(public payload: any) {
    }
  }

  export class RegisterFailedAction implements Action {
    readonly type = REGISTER_FAILED

    constructor(public payload: any) {
    }
  }

  export type Actions =
    LoginAction |
    LoginSuccessAction |
    LogoutAction |
    RouteNotAuthorizedAction |
    RegisterAction |
    RegisterSuccessAction |
    RegisterFailedAction
}
