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

  public displayError(error: any) {
    this.modal.alert()
      .size('sm')
      .title('Oh snap!')
      .isBlocking(true)
      .okBtnClass("hidden")
      .body(error)
      .headerClass('modal-error-header')
      .bodyClass('modal-body')
      .footerClass('modal-footer')
      .open()
      .then(dialog => setTimeout(function () {
        dialog.dismiss()
      }, 2000)), this.isShown = true
  }

  public displayWarning(message: any) {
    this.modal.alert()
      .size('sm')
      .title('Try Again :)')
      .isBlocking(true)
      .okBtnClass("hidden")
      .body(message)
      .headerClass('modal-warning-header')
      .bodyClass('modal-body')
      .footerClass('modal-footer')
      .open()
      .then(dialog => setTimeout(function () {
        dialog.dismiss()
      }, 2000)), this.isShown = true
  }

  public displaySuccess(message: any) {
    this.modal.alert()
      .size('sm')
      .title('Awesome!')
      .isBlocking(false)
      .okBtnClass("hidden")
      .body(message)
      .headerClass('modal-success-header')
      .bodyClass('modal-body')
      .footerClass('modal-footer')
      .open()
      .then(dialog => setTimeout(function () {
        dialog.dismiss()
      }, 2000)), this.isShown = true
  }

  // public confirmDeletion(message: any): Promise<DialogRef<TwoButtonPreset>> {
  //   return this.modal.confirm()
  //     .size('sm')
  //     .headerClass('modal-alert-header')
  //     .footerClass('modal-alert-footer')
  //     .isBlocking(true)
  //     .body(message)
  //     .okBtn('Yes')
  //     .cancelBtn('No')
  //     .open();
  // }

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
