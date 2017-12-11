import { Component } from "@angular/core"
import { BaseComponent } from "../../base.component"
import { AuthService } from "../../../core/services/authentication/auth.service"
import { Router } from "@angular/router"
import { RootState } from "../../../core/store/state/root-state"
import { Store } from "@ngrx/store"
import { selectAuthIsLoggedIn } from "../../../core/store/reducers"
import { AuthenticationActions } from "../../../core/store/actions/authentication.actions"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent extends BaseComponent {
  public isLogged: boolean = false

  constructor(private authService: AuthService,
              private router: Router,
              private store$: Store<RootState>) {
    super()

    this.store$.select(selectAuthIsLoggedIn)
      .subscribe(isLogged => {
        this.isLogged = isLogged
      })
  }

  public signOut() {
    this.store$.dispatch(new AuthenticationActions.LogoutAction())
  }
}
