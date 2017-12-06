import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import { TokenVerifierService } from "../../services/authentication/token-verifier.service"

@Injectable()

export class TokenGuard implements CanActivate {

  constructor(private tokenVerifier: TokenVerifierService) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.verifyToken()
  }

  private verifyToken(): boolean {
    if (!this.tokenVerifier.checkTokenExpiration()) {
      return false
    }

    return true
  }
}
