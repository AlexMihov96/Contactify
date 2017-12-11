import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable"
import 'rxjs/Rx'
import { HttpClientService } from "../../"
import { UserPostsViewModel } from "../../../models/view-models/user-posts.view-model"

@Injectable()

export class NewsFeedService {
  constructor(private httpClient: HttpClientService) {
  }

  public createPost(postMessage: string, userId: number): Observable<UserPostsViewModel[]> {
    let body = JSON.stringify(postMessage)

    return this.httpClient.post('post/create-post/' + userId, body)
  }

  public getAllPosts(): Observable<UserPostsViewModel[]> {
    return this.httpClient.get('post/get-ten-latest-posts')
  }
}
