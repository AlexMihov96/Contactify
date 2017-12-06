import {Component} from "@angular/core";
import {BaseComponent} from "../../base.component";
import { UserViewModel } from "../../../core/models/view-models/user.view-model"
import { UserInfoResult } from "../../../core/interfaces/user-info-result"
import { AuthService } from "../../../core/services/authentication/auth.service"
import { ProfileService } from "../../../core/services/time-line/profile/profile.service"

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent extends BaseComponent {
  private authUserInfo: UserInfoResult
  private userInfoModel: UserViewModel = new UserViewModel()

  constructor(private authService: AuthService,
              private profileService: ProfileService) {
    super()
  }

  ngOnInit() {
    this.authUserInfo = this.authService.currentUserInfo()

    this.subscriptions.push(this.profileService.getUserInfo(this.authUserInfo.id)
      .subscribe(response => this.userInfoModel = response
      ))
  }
}
