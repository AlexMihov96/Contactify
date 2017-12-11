import { AuthenticationState } from "./authentication.state"
import { NewsFeedState } from "./news-feed.state"

export interface RootState {
  auth: AuthenticationState,
  newsFeed: NewsFeedState
}
