import { NgModule } from "@angular/core"
import { HttpClientService, AuthService } from "./index"

@NgModule({
  providers: [
    HttpClientService,
    AuthService
  ]
})

export class ServiceModule {
}
