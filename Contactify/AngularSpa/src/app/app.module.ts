import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ModalModule} from 'angular2-modal';
import {BootstrapModalModule} from 'angular2-modal/plugins/bootstrap';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {routing} from "./app.routing";
import {
  AuthenticationService,
  BaseService,
  HttpClient,
  LocalStorageService,
  SettingsService,
  TokenVerifier
} from './services/index'

import {
  LoginComponent
}
  from "./components/index";
import {AuthGuard} from "./guards/index";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    BaseService,
    AuthenticationService,
    HttpClient,
    LocalStorageService,
    SettingsService,
    TokenVerifier,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
