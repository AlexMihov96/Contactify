import {Component} from "@angular/core";
import {BaseComponent} from "../../base.component";
import {Modal} from "angular2-modal/plugins/bootstrap";
import {BaseService} from "../../../services/base.service";
import {HomeService} from "../../../services/time-line/home.service";
import {AuthenticationService} from "../../../services/system-services/authentication.service";
import {IUserInfoResult} from "../../../models/system-models/user-info-result";
import {Resources} from "../../../constants/resources-en";
import {UserPostsViewModel} from "../../../models/time-line/user-posts.view-model";
import {debug} from "util";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent extends BaseComponent {
  private postMessage: string
  private userInfo: IUserInfoResult
  private postViewModel: UserPostsViewModel[] = []

  constructor(modal: Modal,
              private baseService: BaseService,
              private homeService: HomeService,
              private authService: AuthenticationService) {
    super(modal)
  }

  ngOnInit() {
    this.userInfo = this.authService.currentUserInfo()

    this.subscriptions.push(this.homeService.getTenLatestPosts()
      .subscribe(response => this.postViewModel = response))
  }

  public post(postMessage: string) {
    if (postMessage) {
      this.subscriptions.push(this.homeService.createPost(postMessage, this.userInfo.id)
        .subscribe(response => this.postViewModel = response))
    }
    else {
      this.baseService.displayWarning(Resources.invalidLenght)
    }
  }
}
