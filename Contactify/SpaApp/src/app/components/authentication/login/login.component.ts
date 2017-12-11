import { Component } from "@angular/core"
import { BaseComponent } from "../../base.component"
import { HttpClientService } from "../../../core/services"
import { Store } from "@ngrx/store"
import { RootState } from "../../../core/store/state/root-state"
import { AuthenticationActions } from "../../../core/store/actions/authentication.actions"

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent extends BaseComponent {
  private model: {
    username: string,
    password: string
  } = {username: '', password: ''}

  constructor(private http: HttpClientService,
              private store$: Store<RootState>) {
    super()
  }

  public login() {
    this.store$.dispatch(new AuthenticationActions.LoginAction(this.model))
  }

  public changePassword() {
  }
}
