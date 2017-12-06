import { Injectable } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import { ModalOptions } from '../../interfaces/modal-options'
import { DialogSizeTypes } from "../../interfaces/dialog-size-types"

@Injectable()
export class ModalService {

  constructor(
    private modal: NgbModal) {

  }

  public open(type: number, size: string, component: any): Observable<any> {
    const modalOptions = this.createModalOptions(size)

    const modalRef = this.modal.open(component, modalOptions)

    modalRef.componentInstance.type = type

    return Observable.fromPromise(modalRef.result)
  }

  private createModalOptions(size: string): ModalOptions {
    const modalOptions = new ModalOptions()

    switch (size) {
      case DialogSizeTypes.ExtraLarge: {
        modalOptions.size = DialogSizeTypes.Large
        modalOptions.windowClass = 'modal-xl'
        break
      }
      case DialogSizeTypes.ExtraExtraLarge: {
        modalOptions.size = DialogSizeTypes.Large
        modalOptions.windowClass = 'modal-xxl'
        break
      }
      default: {
        modalOptions.size = size
        break
      }
    }

    return modalOptions
  }
}
