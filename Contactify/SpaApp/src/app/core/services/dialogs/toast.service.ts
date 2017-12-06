import { Injectable } from '@angular/core'
import { ToastsManager } from 'ng2-toastr'
import { TranslateService } from '@ngx-translate/core'

@Injectable()

export class ToastrService {
  constructor(private toastr: ToastsManager,
              private translate: TranslateService) {
  }

  public showSuccess(msg: string, translate: boolean = true): void {
    this.showNotification('success', 'general.success', msg, translate)
  }

  public showInfo(msg: string, translate: boolean = true): void {
    this.showNotification('info', 'general.info', msg, translate)
  }

  public showWarning(msg: string, translate: boolean = true): void {
    this.showNotification('warning', 'general.warning', msg, translate)
  }

  public showError(msg: string, translate: boolean = true): void {
    this.showNotification('error', 'general.alert', msg, translate)
  }

  private showNotification(toastrMethodName: string, translateTitleStr: string, msg: string, translateMsg: boolean): void {
    let title: string = ''
    this.translate.get(translateTitleStr).subscribe(tr => {
      title = tr
    })

    if (translateMsg) {
      this.translate.get(msg).subscribe(tr => {
        msg = tr
      })
    }

    this.toastr[toastrMethodName](msg, title)
  }
}
