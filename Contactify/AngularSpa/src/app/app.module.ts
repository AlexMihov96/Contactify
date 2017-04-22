import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";
import {AppComponent} from "./app.component";
import {ModalModule} from "angular2-modal";

import {routing} from "./app.routing";
import {
  LoginComponent
} from './components/index'

import {
  AuthenticationService,
  TokenVerifierService,
  BaseService,
  SettingsService,
  LocalStorageService,
  HttpClient
} from "./services/index";

import {
  AuthGuard
} from "./guards/index";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    routing
  ],
  providers: [
    AuthenticationService,
    HttpClient,
    LocalStorageService,
    SettingsService,
    TokenVerifierService,
    BaseService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
