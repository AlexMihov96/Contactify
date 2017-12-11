import { Action } from "@ngrx/store"
import { Actions, Effect } from "@ngrx/effects"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable"
import { NewsFeedActions } from "../actions/news-feed.actions"
import { NewsFeedService } from "../../services/time-line/news-feed/news-feed.service"
import { of } from "rxjs/observable/of"

@Injectable()

export class NewsFeedEffects {
  private userId = Number(JSON.parse(window.localStorage.getItem("userId")))

  constructor(private service: NewsFeedService,
              private actions$: Actions) {
  }

  @Effect() createPost$: Observable<Action> = this.actions$
    .ofType(NewsFeedActions.CREATE_POST)
    .switchMap((action: NewsFeedActions.CreatePostAction) =>
      this.service.createPost(action.payload.postMessage, this.userId)
        .map(data => new NewsFeedActions.CreatePostSuccessAction(data))
        .catch(() => of(new NewsFeedActions.CreatePostFailAction({}))))

  @Effect() getAll: Observable<Action> = this.actions$
    .ofType(NewsFeedActions.GET_ALL_POSTS)
    .switchMap((action: NewsFeedActions.GetAllPostsAction) =>
      this.service.getAllPosts()
        .map(data => new NewsFeedActions.GetAllPostsSuccessAction(data))
        .catch(() => of(new NewsFeedActions.GetAllPostsFailAction({}))))
}
