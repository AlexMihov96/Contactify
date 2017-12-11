import { Component } from "@angular/core"
import { BaseComponent } from "../base.component"
import { Store } from "@ngrx/store"
import { RootState } from "../../core/store/state/root-state"
import { selectAuthUser } from "../../core/store/reducers"
import { UserViewModel } from "../../core/models/view-models/user.view-model"
import { AuthTokenResult } from "../../core/interfaces/auth-token-result"

@Component({
  templateUrl: './profile.component.html'
})

export class ProfileComponent extends BaseComponent {
  constructor(private store$: Store<RootState>) {
    super()
  }

  ngOnInit() {

  }
}
