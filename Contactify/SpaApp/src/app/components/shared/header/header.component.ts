import { Component } from "@angular/core"
import { BaseComponent } from "../../base.component"
import { AuthService } from "../../../core/services/authentication/auth.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent extends BaseComponent {
  constructor(private authService: AuthService,
              private router: Router) {
    super()
  }

  public signOut() {
    this.authService.logout()

    this.router.navigate(['login'])
  }
}
