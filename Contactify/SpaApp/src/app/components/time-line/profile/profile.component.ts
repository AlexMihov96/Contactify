import { Component } from "@angular/core"
import { BaseComponent } from "../../base.component"
import { UserViewModel } from "../../../core/models/view-models/user.view-model"
import { AuthService } from "../../../core/services"
import { ProfileService } from "../../../core/services/time-line/profile/profile.service"
import { AppState } from "../../../core/store/state/app-state"
import { Store } from "@ngrx/store"
import { selectAuthUser } from "../../../core/store/reducers"

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent extends BaseComponent {
  private userInfoModel: UserViewModel = new UserViewModel()

  constructor(private authService: AuthService,
              private profileService: ProfileService,
              private store$: Store<AppState>) {
    super()

    this.store$.select(selectAuthUser)
      .subscribe(user => {
        debugger
        this.userInfoModel = user
      })
  }

  ngOnInit() {
    // this.subscriptions.push(this.profileService.getUserInfo(this.authUserInfo.id)
    //   .subscribe(response => this.userInfoModel = response
    //   ))
  }
}
