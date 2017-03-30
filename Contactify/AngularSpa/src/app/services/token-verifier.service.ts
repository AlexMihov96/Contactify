import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "./authentication.service";

@Injectable()

export class TokenVerifier {
  //private message: string = '<div class="my-modal-body">Your session was expired. Please, log in again!</div>'

  constructor(private router: Router,
              private authService: AuthenticationService) {
  }

  public checkTokenExpiration(): boolean {
    let isValid = this.authService.isTheTokenValid()

    if (!isValid) {
      this.authService.logout()
      this.router.navigate(['login'])

      return false
    }
    return true
  }
}
