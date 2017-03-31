import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
import {BaseService} from "./base.service";
import {Modal} from "angular2-modal/plugins/bootstrap";

@Injectable()

export class TokenVerifier extends BaseService {
  private message: string = '<div class="my-modal-body">Your session was expired. Please, log in again!</div>'

  constructor(private router: Router,
              private authService: AuthenticationService,
              modal: Modal) {
    super(modal)
  }

  public checkTokenExpiration(): boolean {
    let isValid = this.authService.isTheTokenValid()

    if (!isValid) {
      this.authService.logout()
      this.showAlert(this.message);
      this.router.navigate(['login'])

      return false
    }
    return true
  }
}
