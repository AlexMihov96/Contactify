import {Injectable} from "@angular/core";
import {BaseService} from "../base.service";
import {HttpClient} from "../system-services/http-client.service";
import {RegisterUserInputModel} from "../../models/input-models/register-user.input-model";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'

@Injectable()

export class RegisterService {
  constructor(private httpClient: HttpClient,
              private baseService: BaseService) {
  }

  public register(user: RegisterUserInputModel): Observable<any> {
    let body = JSON.stringify(user)

    return this.httpClient.post('account/register', body, false)
      .map(resp => resp)
      .catch(this.baseService.handleError)
  }
}
