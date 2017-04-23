import {Component} from "@angular/core";
import {BaseComponent} from "../base.component";
import {Modal} from "angular2-modal/plugins/bootstrap";
import {BaseService} from "../../services/base.service";
import {RegisterUserInputModel} from "../../models/input-models/register-user.input-model";
import {AuthenticationService} from "../../services/system-services/authentication.service";
import {Router} from "@angular/router";
import {RegisterService} from "../../services/user-services/register.service";

@Component({
  templateUrl: './register.component.html'
})

export class RegisterComponent extends BaseComponent {
  private userToRegister: RegisterUserInputModel = new RegisterUserInputModel

  constructor(private authService: AuthenticationService,
              private router: Router,
              private baseService: BaseService,
              private registerService: RegisterService,
              modal: Modal) {
    super(modal)
  }

  private register(form: any): void {
    this.baseService.displaySuccess(form.username)
  }
}
