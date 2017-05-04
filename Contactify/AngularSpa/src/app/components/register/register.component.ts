import {Component} from "@angular/core";
import {BaseComponent} from "../base.component";
import {Modal} from "angular2-modal/plugins/bootstrap";
import {BaseService} from "../../services/base.service";
import {AuthenticationService} from "../../services/system-services/authentication.service";
import {Router} from "@angular/router";
import {RegisterService} from "../../services/user-services/register.service";
import {Resources} from "../../constants/resources-en";
import {RegisterUserInputModel} from "../../models/input-models/register-user.input-model";
import {IUserInfoResult} from "../../models/system-models/user-info-result";

@Component({
  templateUrl: './register.component.html'
})

export class RegisterComponent extends BaseComponent {
  public user: RegisterUserInputModel = new RegisterUserInputModel()

  constructor(private authService: AuthenticationService,
              private router: Router,
              private baseService: BaseService,
              private registerService: RegisterService,
              modal: Modal) {
    super(modal)
  }

  private register(form: any): void {
    this.subscriptions.push(this.registerService.register(this.user)
      .subscribe(resp => {
          this.baseService.displaySuccess(Resources.successRegister)

          this.router.navigate(['/home'])
        },
        error => {
          this.baseService.displayError(Resources.invalidData)
        }))
  }
}
