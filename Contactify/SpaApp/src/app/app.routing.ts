import { Routes } from "@angular/router"
import { LoginComponent } from "./components/authentication/login/login.component"
import { RegisterComponent } from "./components/authentication/register/register.component"
import { NotFoundComponent } from "./components/shared/not-found/not-found.component"
import { AuthGuard, IsLoggedGuard } from "./core/guards"
import { ProfileComponent } from "./components/profile/profile.component"

export const appRoutes: Routes = [
  {path: '', loadChildren: './components/time-line/time-line.module#TimeLineModule'},

  {path: 'profile/:userId', component: ProfileComponent, canActivate: [AuthGuard]},

  {path: 'login', component: LoginComponent, canActivate: [IsLoggedGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [IsLoggedGuard]},

  {path: 'help', loadChildren: './components/help/help.module#HelpModule'},

  {path: '**', component: NotFoundComponent}
]
