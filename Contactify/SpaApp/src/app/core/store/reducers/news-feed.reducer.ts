import { NewsFeedActions } from "../actions/news-feed.actions"
import { initialState, NewsFeedState } from "../state/news-feed.state"
import { NewsFeedViewModel } from "../../models/view-models/news-feed.view-model"

export function reducer(state = initialState, action: NewsFeedActions.Actions): NewsFeedState {
  switch (action.type) {
    case NewsFeedActions.CREATE_POST_SUCCESS: {
      let newestPost = new NewsFeedViewModel()

      newestPost = action.payload as NewsFeedViewModel

      state.newsFeed.splice(0, 0, newestPost)

      return Object.assign({}, state, state.newsFeed)
    }

    case NewsFeedActions.CREATE_POST_FAIL: {
      return state
    }

    case NewsFeedActions.GET_ALL_POSTS_SUCCESS: {
      const allPosts = action.payload as NewsFeedViewModel[]

      state.newsFeed = allPosts

      return Object.assign({}, state, state.newsFeed)
    }

    default: {
      return state
    }
  }
}
