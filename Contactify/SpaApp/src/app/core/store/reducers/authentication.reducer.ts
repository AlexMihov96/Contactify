import * as jwtDecode from "jwt-decode"
import { AuthenticationState } from "../state/authentication.state"
import { AuthenticationActions } from "../actions/authentication.actions"

const token = JSON.parse(window.localStorage.getItem("token"))
const tokenExpiration = JSON.parse(window.localStorage.getItem("token_expiration"))

const initialState: AuthenticationState = {
  token: token,//TODO: replace with ngrx-store-localstorage
  tokenExpiration: tokenExpiration,
  isLoggedIn: tokenExpiration >= Date.now() / 1000,
  user: null,
  redirectUrl: "/"
}

export function reducer(state = initialState, action: AuthenticationActions.Actions): AuthenticationState {
  switch (action.type) {
    case AuthenticationActions.LOGIN_SUCCESS:
      const authData = action.payload
      window.localStorage.setItem("token", JSON.stringify(authData.access_token))//TODO: replace with ngrx-store-localstorage
      const token = jwtDecode(authData.access_token)
      window.localStorage.setItem("token_expiration", JSON.stringify(token.exp))

      return Object.assign({}, state, {
        token: authData.access_token,
        tokenExpiration: token.exp,
        isLoggedIn: true,
        user: {id: token.userId, fullName: token.unique_name, userRole: token.userRole}
      })

    case AuthenticationActions.LOGOUT:
      window.localStorage.removeItem("token")
      window.localStorage.removeItem("token_expiration")

      return Object.assign({}, state, {
        token: null,
        tokenExpiration: null,
        isLoggedIn: false,
        user: null
      })

    case AuthenticationActions.ROUTE_NOT_AUTHORIZED: {
      const redirectUrl = action.payload

      return Object.assign({}, initialState, {redirectUrl: redirectUrl})
    }

    default: {
      return state
    }
  }
}
