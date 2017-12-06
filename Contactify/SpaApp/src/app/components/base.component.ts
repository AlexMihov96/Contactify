import { Subscription } from "rxjs/Subscription"
import { OnDestroy } from "@angular/core"

export class BaseComponent implements OnDestroy {
  protected subscriptions: Subscription[] = []

  public ngOnDestroy() {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
    }
  }
}
