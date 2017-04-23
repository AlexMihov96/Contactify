import {Injectable} from "@angular/core"
import {Headers, Http, RequestOptions} from "@angular/http"
import {Router} from "@angular/router"
import {TokenVerifierService} from "./token-verifier.service"
import {SettingsService} from "./settings.service"
import {Observable} from "rxjs"
import {AuthenticationService} from "./authentication.service"
import {BaseService} from "../base.service";

@Injectable()

export class HttpClient {
  private headers: Headers

  constructor(private http: Http,
              private authService: AuthenticationService,
              private router: Router,
              private tokenVerifier: TokenVerifierService,
              private settingsService: SettingsService,
              private baseService: BaseService) {
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json')
  }

  get(url, isAuthorized = false) {
    if (isAuthorized == true) {
      if (!this.tokenVerifier.checkTokenExpiration()) {
        return Observable.empty()
      }

      this.headers = this.authService.createAuthHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.get(this.settingsService.apiBaseUrl + url, {headers: this.headers})
      .catch(error => {
        return this.baseService.handleError(error)
      })
  }

  post(url, data, isAuthorized = false) {
    if (isAuthorized == true) {
      if (!this.tokenVerifier.checkTokenExpiration()) {
        return Observable.empty()
      }

      this.headers = this.authService.createAuthHeaders({
        'Content-Type': 'application/json'
      })
    } else {
      this.headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    }

    let options = new RequestOptions({headers: this.headers})
    options.method = 'POST'

    return this.http.post(`${this.settingsService.apiBaseUrl}${url}`, data, options)
      .catch(error => {
        return this.baseService.handleError(error)
      })
  }

  delete(url, data, isAuthorized = false) {
    if (isAuthorized == true) {
      if (!this.tokenVerifier.checkTokenExpiration()) {
        return Observable.empty()
      }

      this.headers = this.authService.createAuthHeaders({
        'Content-Type': 'application/json'
      })
    } else {
      this.headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    }

    let options = new RequestOptions({headers: this.headers})
    options.method = 'DELETE'

    return this.http.delete(`${this.settingsService.apiBaseUrl}${url}`, options)
      .catch(error => {
        return this.baseService.handleError(error)
      })
  }

  put(url, data, isAuthorized = false) {
    if (isAuthorized == true) {
      if (!this.tokenVerifier.checkTokenExpiration()) {
        return Observable.empty();
      }

      this.headers = this.authService.createAuthHeaders({
        'Content-Type': 'application/json'
      })
    } else {
      this.headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json"
      });
    }

    let options = new RequestOptions({headers: this.headers})
    options.method = 'PUT'

    return this.http.put(`${this.settingsService.apiBaseUrl}${url}`, data, options)
      .catch(error => {
        return this.baseService.handleError(error);
      })
  }
}
