import {Injectable} from "@angular/core";
import {Subscription} from "rxjs";
import {Modal, TwoButtonPreset} from 'angular2-modal/plugins/bootstrap';
import {Observable} from "rxjs/Observable";
import {Resources} from "../constants/resources-en";
import {DialogRef} from "angular2-modal";

@Injectable()

export class BaseService {
  private isShown: boolean = false

  constructor(private modal: Modal) {
  }

  public showAlert(error: any) {
    this.modal.alert()
      .size('sm')
      .headerClass('modal-alert-header')
      .footerClass('modal-alert-footer')
      .isBlocking(true)
      .body(error)
      .open()
      .then(() => this.isShown = true);
  }

  public showSuccessConfirm(message: any) {
    this.modal.alert()
      .size('sm')
      .isBlocking(true)
      .headerClass('modal-success-header')
      .footerClass('modal-success-footer')
      .body(message)
      .open()
      .then(() => this.isShown = true)
  }

  public showSuccessInfo(message: any) {
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

  public  showWarning(message: any) {
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

  public confirmDeletion(message: any): Promise<DialogRef<TwoButtonPreset>> {
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

  public handleError(error: any) {
    if (!this.isShown) {
      if (error.status == 0 || error._body == '') {

        return Observable.throw(Resources.oops)
      } else {
        return Observable.throw(error._body)
      }
    }
  }

  protected catchError(error: any) {
    return Observable.throw(error)
  }
}
