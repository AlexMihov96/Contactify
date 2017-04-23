import {Injectable, EventEmitter} from '@angular/core'
import {Http, Headers, Response, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {Modal} from 'angular2-modal/plugins/bootstrap'
import {SettingsService} from './settings.service'
import {LocalStorageService} from './local-storage.service'
import {Router} from '@angular/router'
import {JwtHelper} from 'angular2-jwt'
import {ITokenResult} from "../../models/system-models/token-result"
import {IUserInfoResult} from "../../models/system-models/user-info-result"
import {BaseService} from "../base.service";

@Injectable()

export class AuthenticationService extends BaseService {
  public redirectUrl: string
  public userChanged: EventEmitter<IUserInfoResult>
  public showMenu: EventEmitter<any>
  public userInfo: IUserInfoResult = {
    id: 0,
    role: '',
    userFullName: '',
  }
  jwtHelper: JwtHelper = new JwtHelper()
  tokenExpirationDate: Date
  loginError: any

  constructor(private http: Http,
              private settingsService: SettingsService,
              private localStorageService: LocalStorageService,
              private router: Router,
              modal: Modal) {
    super(modal)

    this.userChanged = new EventEmitter<IUserInfoResult>()
    this.showMenu = new EventEmitter<any>()
  }

  public login(username, password): Observable<ITokenResult> {
    let headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/x-www-form-urlencoded"
    })

    let body = `username=${username}&password=${password}`

    // get auth token
    return this.http.post(this.settingsService.apiBaseUrl + 'token', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  public currentUserInfo() {
    let token = this.localStorageService.retrieve(this.settingsService.tokenStorageKey, true)
    return this.extractUserInfo(token)
  }

  public extractUserInfo(token: ITokenResult): IUserInfoResult {
    if (token !== null && token !== undefined) {
      let decodedToken = this.jwtHelper.decodeToken(token.access_token)
      let userId = decodedToken['id']
      let userRole = decodedToken['role']
      let userFullName = decodedToken['userFullName']
      this.userInfo = {
        id: userId,
        role: userRole,
        userFullName: userFullName,
      }
      this.userChanged.emit(this.userInfo)
    }

    return this.userInfo
  }

  public logout() {
    this.localStorageService.remove(this.settingsService.tokenStorageKey, true)
    this.localStorageService.remove(this.settingsService.userStorageKey, true)
    this.userChanged.emit(null)
    this.showMenu.emit(false)
    this.loginError = ''
    this.redirectUrl = ''
  }

  public createAuthHeaders(headers?: { [name: string]: any }): Headers {
    let authHeaders = new Headers()

    if (headers) {
      for (let key in headers) {
        if (headers.hasOwnProperty(key)) {
          authHeaders.append(key, headers[key])
        }
      }
    }

    // append authentication
    let tokenResult: ITokenResult = this.localStorageService.retrieve(this.settingsService.tokenStorageKey, true)

    if (tokenResult) {
      authHeaders.append('Authorization', 'Bearer ' + tokenResult.access_token)
    }

    return authHeaders
  }

  public isTheTokenValid(): boolean {
    let tokenResult: ITokenResult = this.localStorageService.retrieve(this.settingsService.tokenStorageKey, true)

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
    }
    else {
      this.router.navigate(['/home'])
    }
  }
}
