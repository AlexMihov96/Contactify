import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
import {Modal} from "angular2-modal/plugins/bootstrap";
import {Resources} from "../constants/resources-en";
import {BaseService} from "./base.service";

@Injectable()

export class TokenVerifierService extends BaseService {
  constructor(private router: Router,
              private authService: AuthenticationService,
              modal: Modal) {
    super(modal)
  }

  public checkTokenExpiration(): boolean {
    let isValid = this.authService.isTheTokenValid()

    if (!isValid) {
      this.authService.logout()
      this.showAlert(Resources.sessionExpired);
      this.router.navigate(['login'])

      return false
    }
    return true
  }
}
