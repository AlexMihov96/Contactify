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
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  ProfileComponent,
  UserListComponent,
  NavBarComponent
} from './components/index'

import {
  AuthenticationService,
  TokenVerifierService,
  BaseService,
  SettingsService,
  LocalStorageService,
  HttpClient,
  RegisterService,
  ProfileService,
  HomeService
} from "./services/index";

import {
  AuthGuard,
  IsLoggedGuard
} from "./guards/index";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    UserListComponent,
    NavBarComponent
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
    AuthGuard,
    IsLoggedGuard,
    LocalStorageService,
    SettingsService,
    TokenVerifierService,
    BaseService,
    RegisterService,
    ProfileService,
    HomeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
