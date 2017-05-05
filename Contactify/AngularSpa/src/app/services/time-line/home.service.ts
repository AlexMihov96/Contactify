import {Injectable} from "@angular/core";
import {BaseService} from "../base.service";
import {HttpClient} from "../system-services/http-client.service";
import {RegisterUserInputModel} from "../../models/input-models/register-user.input-model";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'
import {UserPostsViewModel} from "../../models/time-line/user-posts.view-model";
import {Response} from "@angular/http";

@Injectable()

export class HomeService {
  constructor(private httpClient: HttpClient,
              private baseService: BaseService) {
  }

  public createPost(postMessage: string, userId: number): Observable<UserPostsViewModel[]> {
    let body = JSON.stringify(postMessage)

    return this.httpClient.post('post/create-post/' + userId, body, true)
      .map((resp: Response) => <UserPostsViewModel[]>resp.json())
      .catch(this.baseService.handleError)
  }

  public getTenLatestPosts(): Observable<UserPostsViewModel[]> {
    return this.httpClient.get('post/get-ten-latest-posts', true)
      .map((resp: Response) => <UserPostsViewModel[]>resp.json())
      .catch(this.baseService.handleError)
  }
}
