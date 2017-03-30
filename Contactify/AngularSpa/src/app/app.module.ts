import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

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
    routing
  ],
  providers: [
    BaseService,
    AuthenticationService,
    HttpClient,
    LocalStorageService,
    SettingsService,
    TokenVerifier
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
