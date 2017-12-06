import { Routes } from "@angular/router"
import { LoginComponent } from "./components/authentication/login/login.component"
import { RegisterComponent } from "./components/authentication/register/register.component"
import { NotFoundComponent } from "./components/shared/not-found/not-found.component"
import { IsLoggedGuard } from "./core/guards"

export const appRoutes: Routes = [
  {path: '', loadChildren: './components/time-line/time-line.module#TimeLineModule'},

  {path: 'login', component: LoginComponent, canActivate: [IsLoggedGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [IsLoggedGuard]},

  {path: '**', component: NotFoundComponent}
]
