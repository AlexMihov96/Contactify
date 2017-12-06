import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable"
import { HttpClientService } from "../../authentication/http-client.service"
import { UserViewModel } from "../../../models/view-models/user.view-model"

@Injectable()

export class ProfileService {
  constructor(private httpClient: HttpClientService) {
  }

  public getUserInfo(userId: number): Observable<UserViewModel> {
    return this.httpClient.get('profile/get-user-info/' + userId)
  }
}
