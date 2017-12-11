import { Component } from "@angular/core"
import { BaseComponent } from "../../base.component"
import { RegisterUserInputModel } from "../../../core/models/input-models/register.input-model"
import { Router } from "@angular/router"
import { AuthService } from "../../../core/services"
import { ToastrService } from "../../../core/services/dialogs/toast.service"
import { RootState } from "../../../core/store/state/root-state"
import { Store } from "@ngrx/store"
import { AuthenticationActions } from "../../../core/store/actions/authentication.actions"

@Component({
  templateUrl: './register.component.html'
})

export class RegisterComponent extends BaseComponent {
  public user: RegisterUserInputModel = new RegisterUserInputModel()

  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrService,
              private store$: Store<RootState>) {
    super()
  }

  private register(user: RegisterUserInputModel): void {
    this.store$.dispatch(new AuthenticationActions.RegisterAction(user))
  }
}
