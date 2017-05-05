import {Modal} from "angular2-modal/plugins/bootstrap";
import {BaseComponent} from "../base.component";
import {Component} from "@angular/core";
import {AuthenticationService} from "../../services/system-services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent extends BaseComponent {
  constructor(modal: Modal,
              private authService: AuthenticationService,
              private router: Router) {
    super(modal)
  }

  public signOut() {
    this.authService.logout()

    this.router.navigate(['login'])
  }
}
