import { NgModule } from "@angular/core"
import { authenticationComponents } from "./index"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { ToastModule } from "ng2-toastr"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    ...authenticationComponents
  ],
  exports: [
    ...authenticationComponents
  ],
  providers: [],
})

export class AuthenticationModule {

}
