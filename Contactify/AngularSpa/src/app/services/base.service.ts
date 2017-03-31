import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Modal, TwoButtonPreset} from "angular2-modal/plugins/bootstrap";
import {DialogRef} from "angular2-modal";

@Injectable()

export class BaseService {
  private isShown: boolean = false

  constructor(private modal: Modal) {
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

  showAlert(error: any) {
    this.modal.alert()
      .size('sm')
      .headerClass('modal-alert-header')
      .footerClass('modal-alert-footer')
      .isBlocking(true)
      .body(error)
      .open()
      .then(() => this.isShown = true);
  }

  showSuccessConfirm(message: any) {
    this.modal.alert()
      .size('sm')
      .isBlocking(true)
      .headerClass('modal-success-header')
      .footerClass('modal-success-footer')
      .body(message)
      .open()
      .then(() => this.isShown = true)
  }

  showSuccessInfo(message: any) {
    this.modal.alert()
      .size('sm')
      .isBlocking(false)
      .headerClass('modal-success-header')
      .footerClass('modal-success-footer')
      .body(message)
      .okBtnClass("hidden")
      .open()
      .then(dialog => setTimeout(function () {
        dialog.dismiss()
      }, 2000)), this.isShown = true

  }

  showWarning(message: any) {
    this.modal.alert()
      .size('sm')
      .isBlocking(true)
      .headerClass('modal-warrning-header')
      .footerClass('modal-warrning-footer')
      .body(message)
      .okBtnClass("hidden")
      .open()
      .then(dialog => setTimeout(function () {
        dialog.dismiss()
      }, 2000)), this.isShown = true
  }

  confirmDeletion(message: any): Promise<DialogRef<TwoButtonPreset>> {
    return this.modal.confirm()
      .size('sm')
      .headerClass('modal-alert-header')
      .footerClass('modal-alert-footer')
      .isBlocking(true)
      .body(message)
      .okBtn('Yes')
      .cancelBtn('No')
      .open();
  }
}
