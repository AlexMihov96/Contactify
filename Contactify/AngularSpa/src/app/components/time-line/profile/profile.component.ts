import {Component} from "@angular/core";
import {BaseComponent} from "../../base.component";
import {Modal} from "angular2-modal/plugins/bootstrap";
import {BaseService} from "../../../services/base.service";
import {AuthenticationService} from "../../../services/system-services/authentication.service";
import {ProfileService} from "../../../services/user-services/profile.service";
import {IUserInfoResult} from "../../../models/system-models/user-info-result";
import {UserViewModel} from "../../../models/view-models/user.view-model";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent extends BaseComponent {
  private authUserInfo: IUserInfoResult
  private userInfoModel: UserViewModel = new UserViewModel()

  constructor(modal: Modal,
              private baseService: BaseService,
              private authService: AuthenticationService,
              private profileService: ProfileService) {
    super(modal)
  }

  ngOnInit() {
    this.authUserInfo = this.authService.currentUserInfo()

    this.subscriptions.push(this.profileService.getUserInfo(this.authUserInfo.id)
      .subscribe(response => this.userInfoModel = response
      ))
  }
}
