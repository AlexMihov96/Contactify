import { NewsFeedViewModel } from "../../models/view-models/news-feed.view-model"

export interface NewsFeedState {
  newsFeed: Array<NewsFeedViewModel>
}

export const initialState: NewsFeedState = {
  newsFeed: []
}
