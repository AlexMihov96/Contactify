import {Component} from "@angular/core";
import {BaseComponent} from "../../base.component";
import {UserViewModel} from "../../../models/view-models/user.view-model";
import {Modal} from "angular2-modal/plugins/bootstrap";
import {ProfileService} from "../../../services/user-services/profile.service";
import {IUserInfoResult} from "../../../models/system-models/user-info-result";
import {BaseService} from "../../../services/base.service";
import {AuthenticationService} from "../../../services/system-services/authentication.service";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})

export class UserListComponent extends BaseComponent {
  private userInfo: IUserInfoResult
  private userToDisplay: UserViewModel[] = []

  constructor(modal: Modal,
              private baseService: BaseService,
              private authService: AuthenticationService) {
    super(modal)
  }
}
