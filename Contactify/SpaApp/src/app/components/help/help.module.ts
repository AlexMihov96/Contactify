import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { helpRouting } from "./help.routing"
import { TranslateModule } from "@ngx-translate/core"
import { helpComponents } from "./index"

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(helpRouting),
    TranslateModule],
  providers: [],
  declarations: [...helpComponents],
  exports: [...helpComponents]
})

export class HelpModule {
}
