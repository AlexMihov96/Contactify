import {LoginComponent} from "./components/login/login.component";
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  // otherwise redirect to login
  {path: '**', redirectTo: 'login'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
