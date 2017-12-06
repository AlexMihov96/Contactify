import { Router } from "@angular/router"
import { Injectable } from "@angular/core"
import { AuthService } from "./auth.service"

@Injectable()

export class TokenVerifierService {
  constructor(private router: Router,
              private authService: AuthService) {
  }

  public checkTokenExpiration(): boolean {
    let isValid = this.authService.isTheTokenValid()

    if (!isValid) {
      this.authService.logout()
      //TODO: this.toastr.showWarning("Please login again.")

      this.router.navigate(["login"])
      return false
    }
    return true
  }
}
