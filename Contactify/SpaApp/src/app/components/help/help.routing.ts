import { Routes } from "@angular/router"
import { AuthGuard } from "../../core/guards"
import { HelpComponent } from "./help/help.component"
import { ReportComponent } from "./report/report.component"
import { AssistanceComponent } from "./assistance/assistance.component"

export const helpRouting: Routes = [
  {path: '', component: HelpComponent, canActivate: [AuthGuard], pathMatch: "full"},
  {path: 'report', component: ReportComponent, canActivate: [AuthGuard], pathMatch: "full"},
  {path: 'assistance', component: AssistanceComponent, canActivate: [AuthGuard], pathMatch: "full"},
]
