import { Component, ViewContainerRef } from '@angular/core'
import { ToastsManager } from "ng2-toastr"
import { TranslateService } from "@ngx-translate/core"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private toastr: ToastsManager,
              vRef: ViewContainerRef,
              translate: TranslateService) {

    translate.setDefaultLang("bg")
    translate.use("bg")

    this.toastr.setRootViewContainerRef(vRef)
  }
}
