import { Injectable } from "@angular/core"
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"
import { Router } from "@angular/router"
import { TokenResult } from "../../interfaces/token-result"
import { HttpClientService } from "./http-client.service"
import { StorageService } from "./storage.service"
import { constants } from "../../../constants/constants"
import { UserInfoResult } from "../../interfaces/user-info-result"
import { RegisterUserInputModel } from "../../models/input-models/register.input-model"
import { Observable } from "rxjs/Observable"
import { JwtHelper } from "angular2-jwt"

@Injectable()

export class AuthService {
  public redirectUrl: string
  public userInfo: UserInfoResult = {
    id: 0,
    role: "",
    username: ""
  }
  public tokenExpirationDate: Date
  public loginError: any
  private jwtHelper: JwtHelper = new JwtHelper()

  constructor(private http: HttpClientService,
              private router: Router,
              private storageService: StorageService) {
  }

  public login(username, password) {
    return this.http.login(username, password)
  }

  public register(user: RegisterUserInputModel): Observable<any> {
    let body = JSON.stringify(user)

    return this.http.post('account/register', body)
  }

  public currentUserInfo() {
    let token = this.storageService.retrieve(constants.tokenStorageKey)

    return this.extractUserInfo(token)
  }

  public extractUserInfo(token: TokenResult): UserInfoResult {
    if (token !== null && token !== undefined) {
      let decodedToken = this.jwtHelper.decodeToken(token.access_token)
      let userId = decodedToken["id"]
      let userRole = decodedToken["role"]
      let username = decodedToken["username"]

      this.userInfo = {
        id: userId,
        role: userRole,
        username: username
      }
    }

    return this.userInfo
  }

  public logout() {
    this.storageService.remove(constants.tokenStorageKey)
    this.storageService.remove(constants.userStorageKey)

    this.loginError = ""
    this.redirectUrl = ""
  }

  public isTheTokenValid(): boolean {
    let tokenResult: TokenResult = this.storageService.retrieve(constants.tokenStorageKey)

    if (tokenResult !== null && tokenResult !== undefined) {
      let expDate = new Date(tokenResult.expires_on)

      return expDate > this.getUTCDate()
    }

    return false
  }

  private getUTCDate(date?: Date): Date {
    if (!date) {
      date = new Date()
    }

    let utcDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
      date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds())

    return utcDate
  }

  public calculateExpirationDate(exp: number): Date {
    let date = this.getUTCDate()
    date.setSeconds(date.getUTCSeconds() + exp)

    return date
  }

  public tryNavigate() {
    if (this.redirectUrl) {
      this.router.navigate([this.redirectUrl])
    } else {
      this.router.navigate(["/"])
    }
  }
}
