import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()

export class BaseService {
  private isShown: boolean = false

  constructor() {
  }

  handleError(error: any) {
    if (!this.isShown) {
      if (error.status == 0 || error._body == '') {

        return Observable.throw('<div class="my-modal-body">Oops! Something went wrong.</div>')
      } else {
        return Observable.throw(error._body)
      }
    }
  }

  catchError(error: any) {
    return Observable.throw(error)
  }
}
