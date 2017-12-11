import { NgModule } from "@angular/core"
import { timeLineComponents } from "./index"
import { RouterModule } from "@angular/router"
import { TranslateModule } from "@ngx-translate/core"
import { CommonModule } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { timeLineRouting } from "./time-line.routing"

@NgModule({
  imports: [
    RouterModule.forChild(timeLineRouting),
    TranslateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [...timeLineComponents],
  exports: [...timeLineComponents],
  providers: []
})

export class TimeLineModule {
}
