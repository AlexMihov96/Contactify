import { ActionReducerMap, createSelector } from "@ngrx/store"
import { AppState } from "../state/app-state"
import * as fromAuth from "./authentication.reducer"
import { AuthenticationState } from "../state/authentication.state"

export const combineReducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer
}

export const selectAuth = (state: AppState) => state.auth
export const selectAuthToken = createSelector(selectAuth, (state: AuthenticationState) => state.token)
export const selectAuthIsLoggedIn = createSelector(selectAuth, (state: AuthenticationState) => state.isLoggedIn)
export const selectAuthRedirectUrl = createSelector(selectAuth, (state: AuthenticationState) => state.redirectUrl)
export const selectAuthUser = createSelector(selectAuth, (state: AuthenticationState) => state.user)
