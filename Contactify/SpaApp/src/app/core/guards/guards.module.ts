import { NgModule } from "@angular/core"
import { AuthGuard, IsLoggedGuard } from "./"

@NgModule({
  providers: [
    AuthGuard,
    IsLoggedGuard
  ]
})

export class GuardsModule {
}
