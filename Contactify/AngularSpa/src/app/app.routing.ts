import {LoginComponent} from "./components/login/login.component";
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  // otherwise redirect to login
  {path: '**', redirectTo: 'login'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
