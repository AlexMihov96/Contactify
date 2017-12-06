import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { catchError } from "rxjs/operators"
import { Observable } from "rxjs/Observable"
import { environment } from "../../../../environments/environment"

@Injectable()

export class HttpClientService {
  private headers: HttpHeaders = new HttpHeaders(
    {
      "Content-Type": "application/json"
    })

  constructor(private http: HttpClient) {

    // this.store$.select(selectAuthToken)
    //   .subscribe(token => {
    //     if (token) {
    //       this.setHeaders({Authorization: `Bearer ${token}`})
    //     }
    //   })
  }

  public get<T>(url: string) {
    return this.http
      .get<T>(environment.apiBaseUrl + url, {headers: this.headers})
      .pipe(
        catchError(err => this.handleError(err))
      )
  }

  public post<T>(url: string, data: any) {
    return this.http
      .post<T>(`${environment.apiBaseUrl + url}`, data, {headers: this.headers})
      .pipe(
        catchError(err => this.handleError(err))
      )
  }

  public put<T>(url: string, data: any) {
    return this.http
      .put<T>(`${environment.apiBaseUrl + url}`, data, {headers: this.headers})
      .pipe(
        catchError(err => this.handleError(err))
      )
  }

  public delete(url: string, id: number) {
    return this.http
      .delete(`${environment.apiBaseUrl + url}/${id}`, {headers: this.headers})
      .pipe(
        catchError(err => this.handleError(err))
      )
  }

  public login(username: string, password: string) {
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/x-www-form-urlencoded"
    })

    let body = `username=${username}&password=${password}`

    return this.http.post(environment.apiBaseUrl + "token", body, {headers: headers})
      .pipe(
        catchError(err => this.handleError(err))
      )
  }

  private handleError(error: any) {
    if (error.status) {
      if (error.status >= 100 && error.status < 200) {
        // this.toastr.showInfo(error.statusText)
      }
      if (error.status >= 200 && error.status < 300) {
        //   this.toastr.showSuccess(error.statusText)
      }
      if (error.status >= 300 && error.status < 400) {
        //  this.toastr.showInfo(error.statusText)
      }
      if (error.status >= 400 && error.status < 500) {
        //  this.toastr.determineNotification("general.login-again", DialogTypes.Warning)
        //   this.store$.dispatch(new AuthActions.LogoutAction())
      }
      if (error.status >= 500 && error.status < 600) {
        //    this.toastr.showError(error.statusText)
      }

      return Observable.throw(new Error(error.statusText))
    }
    else {
      //  this.toastr.determineNotification("general.error-occured", DialogTypes.Alert)
    }
  }

  // private setHeaders(headers) {
  //   Object.keys(headers).forEach(header => this.headers.set(header, headers[header]))
  // }
}
