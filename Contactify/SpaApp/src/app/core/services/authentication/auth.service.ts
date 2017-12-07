import { Injectable } from "@angular/core"
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"
import { HttpClientService } from "./http-client.service"
import { RegisterUserInputModel } from "../../models/input-models/register.input-model"
import { Observable } from "rxjs/Observable"

@Injectable()

export class AuthService {
  constructor(private http: HttpClientService,) {
  }

  public login(username, password) {
    return this.http.login(username, password)
  }

  public register(user: RegisterUserInputModel): Observable<any> {
    let body = JSON.stringify(user)

    return this.http.post('account/register', body)
  }
}
