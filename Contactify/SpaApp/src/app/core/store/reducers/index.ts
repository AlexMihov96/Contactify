import { ActionReducerMap, createSelector } from "@ngrx/store"
import { RootState } from "../state/root-state"
import * as fromAuth from "./authentication.reducer"
import * as fromNewsFeed from "./news-feed.reducer"
import { AuthenticationState } from "../state/authentication.state"
import { NewsFeedState } from "../state/news-feed.state"

export const combineRootReducers: ActionReducerMap<RootState> = {
  auth: fromAuth.reducer,
  newsFeed: fromNewsFeed.reducer
}

export const selectAuth = (state: RootState) => state.auth
export const selectAuthToken = createSelector(selectAuth, (state: AuthenticationState) => state.token)
export const selectAuthIsLoggedIn = createSelector(selectAuth, (state: AuthenticationState) => state.isLoggedIn)
export const selectAuthRedirectUrl = createSelector(selectAuth, (state: AuthenticationState) => state.redirectUrl)
export const selectAuthUser = createSelector(selectAuth, (state: AuthenticationState) => state.user)

export const selectTimeLine = (state: RootState) => state.newsFeed
export const selectNewsFeed = createSelector(selectTimeLine, (state: NewsFeedState) => state.newsFeed)
