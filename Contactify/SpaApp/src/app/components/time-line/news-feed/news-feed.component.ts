import { Component } from "@angular/core"
import { BaseComponent } from "../../base.component"
import { UserPostsViewModel } from "../../../core/models/view-models/user-posts.view-model"
import { NewsFeedService } from "../../../core/services/time-line/news-feed/news-feed.service"
import { AuthService } from "../../../core/services"
import { selectAuthUser, selectNewsFeed } from "../../../core/store/reducers"
import { Store } from "@ngrx/store"
import { RootState } from "../../../core/store/state/root-state"
import { AuthTokenResult } from "../../../core/interfaces/auth-token-result"
import { NewsFeedActions } from "../../../core/store/actions/news-feed.actions"
import { NewsFeedViewModel } from "../../../core/models/view-models/news-feed.view-model"

@Component({
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})

export class NewsFeedComponent extends BaseComponent {
  private postMessage: string
  private postViewModel: NewsFeedViewModel[] = []
  private authResult: AuthTokenResult = new AuthTokenResult()
  private userId = Number(JSON.parse(window.localStorage.getItem("userId")))

  constructor(private newsFeedService: NewsFeedService,
              private authService: AuthService,
              private store$: Store<RootState>) {
    super()

    this.store$.select(selectAuthUser)
      .subscribe(authUser => {
        this.authResult = authUser
      })

    this.store$.select(selectNewsFeed)
      .subscribe(newsFeed => {
        this.postViewModel = newsFeed
      })
  }

  ngOnInit() {
    this.store$.dispatch(new NewsFeedActions.GetAllPostsAction({}))
  }

  public post() {
    // let userId = Number(JSON.parse(window.localStorage.getItem("userId")))

    //TODO: check if message empty
    this.store$.dispatch(new NewsFeedActions.CreatePostAction({postMessage: this.postMessage}))

    this.postMessage = ""
  }
}
