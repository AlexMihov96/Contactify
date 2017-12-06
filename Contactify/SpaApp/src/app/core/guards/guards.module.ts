import { NgModule } from "@angular/core"
import { TokenGuard, AuthGuard, IsLoggedGuard } from "./"

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    AuthGuard,
    TokenGuard,
    IsLoggedGuard
  ]
})

export class GuardsModule {
}
