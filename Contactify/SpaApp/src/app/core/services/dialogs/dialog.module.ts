import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { TranslateModule } from '@ngx-translate/core'
import { ModalService, ToastrService } from './index'

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    // ModalComponent,
    // WarningDialogComponent,
    // ConfirmDialogComponent
  ],
  exports: [
    // ModalComponent
  ],
  providers: [
    ModalService,
    ToastrService
  ],
  entryComponents: [
    // WarningDialogComponent,
    // ConfirmDialogComponent
  ]
})

export class DialogModule {
}
