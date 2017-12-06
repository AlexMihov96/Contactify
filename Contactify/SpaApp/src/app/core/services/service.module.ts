import { NgModule } from "@angular/core"
import { HttpClientService, TokenVerifierService, StorageService, AuthService } from "./index"

@NgModule({
  providers: [
    HttpClientService,
    AuthService,
    StorageService,
    TokenVerifierService,
  ]
})

export class ServiceModule {
}
