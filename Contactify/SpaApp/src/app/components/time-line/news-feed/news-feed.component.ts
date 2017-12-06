import { Component } from "@angular/core"
import { BaseComponent } from "../../base.component"
import { UserPostsViewModel } from "../../../core/models/view-models/user-posts.view-model"
import { UserInfoResult } from "../../../core/interfaces/user-info-result"
import { NewsFeedService } from "../../../core/services/time-line/news-feed/news-feed.service"
import { AuthService } from "../../../core/services"

@Component({
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})

export class NewsFeedComponent extends BaseComponent {
  private postMessage: string
  private userInfo: UserInfoResult
  private postViewModel: UserPostsViewModel[] = []

  constructor(private newsFeedService: NewsFeedService,
              private authService: AuthService) {
    super()
  }

  ngOnInit() {
    this.userInfo = this.authService.currentUserInfo()

    this.subscriptions.push(this.newsFeedService.getTenLatestPosts()
      .subscribe(response => this.postViewModel = response))
  }

  public post(postMessage: string) {
    if (postMessage) {
      this.subscriptions.push(this.newsFeedService.createPost(postMessage, this.userInfo.id)
        .subscribe(response => this.postViewModel = response))
    }
    else {
      // this.baseService.displayWarning(Resources.invalidLenght)
    }
  }
}
