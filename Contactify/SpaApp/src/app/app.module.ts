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
import { EffectsModule } from "@ngrx/effects"
import { StoreModule } from "@ngrx/store"
import { AuthenticationEffects } from "./core/store/effects/authentication.effects"
import { combineRootReducers } from "./core/store/reducers"
import { profileComponents } from "./components/profile"
import { NewsFeedEffects } from "./core/store/effects/news-feed.effects"
import { NewsFeedService } from "./core/services/time-line/news-feed/news-feed.service"
import { ProfileService } from "./core/services/time-line/profile/profile.service"

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
    DialogModule,
    StoreModule.forRoot(combineRootReducers),
    EffectsModule.forRoot([
      AuthenticationEffects,
      NewsFeedEffects
    ]),
  ],
  declarations: [
    AppComponent,
    ...profileComponents
  ],
  providers: [ ProfileService,
    NewsFeedService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
