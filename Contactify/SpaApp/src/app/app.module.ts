import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { TranslateHttpLoader } from "@ngx-translate/http-loader"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { ToastModule } from "ng2-toastr"
import { RouterModule } from "@angular/router"
import { TranslateLoader, TranslateModule } from "@ngx-translate/core"
import { appRoutes } from "./app.routing"
import { SharedModule } from "./components/shared/shared.module"
import { ServiceModule } from "./core/services/service.module"
import { AuthenticationModule } from "./components/authentication/authentication.module"
import { GuardsModule } from "./core/guards/guards.module"
import { DialogModule } from "./core/services/dialogs/dialog.module"

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    SharedModule,
    ServiceModule,
    AuthenticationModule,
    GuardsModule,
    DialogModule
    // StoreModule.forRoot(reducers),
    // EffectsModule.forRoot([]),
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
