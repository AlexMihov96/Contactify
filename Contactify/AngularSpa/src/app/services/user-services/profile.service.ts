import {Injectable} from "@angular/core";
import {BaseService} from "../base.service";
import {Modal} from "angular2-modal/plugins/bootstrap";
import {HttpClient} from "../system-services/http-client.service";
import {Observable} from "rxjs/Observable";
import {UserViewModel} from "../../models/view-models/user.view-model";
import {Response} from "@angular/http";

@Injectable()

export class ProfileService {
  constructor(private httpClient: HttpClient,
              private baseService: BaseService) {
  }

  public getUserInfo(userId: number): Observable<UserViewModel> {
    return this.httpClient.get('profile/get-user-info/' + userId, true)
      .map((resp: Response) => <UserViewModel>resp.json())
      .catch(this.baseService.handleError)
  }
}
