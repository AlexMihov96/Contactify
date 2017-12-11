import { Component } from "@angular/core"
import { BaseComponent } from "../../base.component"
import { UserViewModel } from "../../../core/models/view-models/user.view-model"
import { AuthService } from "../../../core/services"
import { ProfileService } from "../../../core/services/time-line/profile/profile.service"
import { RootState } from "../../../core/store/state/root-state"
import { Store } from "@ngrx/store"
import { selectAuthUser } from "../../../core/store/reducers"
import { AuthTokenResult } from "../../../core/interfaces/auth-token-result"

@Component({
  selector: 'profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.css']
})

export class ProfileSidebarComponent extends BaseComponent {
  public userInfoModel: UserViewModel = new UserViewModel()
  private authResult: AuthTokenResult = new AuthTokenResult()
  private userId = Number(JSON.parse(window.localStorage.getItem("userId")))

  constructor(private authService: AuthService,
              private profileService: ProfileService,
              private store$: Store<RootState>) {
    super()

    this.store$.select(selectAuthUser)
      .subscribe(authUser => {
        this.authResult = authUser
      })
  }

  private ngOnInit() {
    let userId = Number(JSON.parse(window.localStorage.getItem("userId")))

    if (this.authResult) {
      this.subscriptions.push(this.profileService.getUserInfo(this.authResult.id)
        .subscribe(response => this.userInfoModel = response
        ))
    }
    else {
      this.subscriptions.push(this.profileService.getUserInfo(userId)
        .subscribe(response => this.userInfoModel = response
        ))
    }
  }
}
