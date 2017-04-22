import {Modal} from "angular2-modal/plugins/bootstrap";
import {Subscription} from "rxjs/Subscription";
import {OnDestroy} from "@angular/core";

export class BaseComponent implements OnDestroy {
  protected subscriptions: Subscription[] = []

  constructor(private modal: Modal) {
  }

  public ngOnDestroy() {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
    }
  }
}
