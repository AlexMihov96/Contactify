import { Component } from "@angular/core"
import { BaseComponent } from "../../base.component"
import { RegisterUserInputModel } from "../../../core/models/input-models/register.input-model"
import { Router } from "@angular/router"
import { AuthService } from "../../../core/services/authentication/auth.service"
import { ToastrService } from "../../../core/services/dialogs/toast.service"

@Component({
  templateUrl: './register.component.html'
})

export class RegisterComponent extends BaseComponent {
  public user: RegisterUserInputModel = new RegisterUserInputModel()

  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) {
    super()
  }

  private register(form: any): void {
    this.subscriptions.push(this.authService.register(this.user)
      .subscribe(resp => {
          this.toastr.showSuccess("Register successful",false)
          this.router.navigate(['/login'])
        },
        error => {
          //TODO:  this.baseService.displayError(Resources.invalidData)
        }))
  }
}
