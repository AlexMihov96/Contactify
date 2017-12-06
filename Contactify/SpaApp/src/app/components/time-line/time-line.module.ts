import { NgModule } from "@angular/core"
import { timeLineComponents } from "./index"
import { RouterModule } from "@angular/router"
import { TranslateModule } from "@ngx-translate/core"
import { CommonModule } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { ProfileService } from "../../core/services/time-line/profile/profile.service"
import { NewsFeedService } from "../../core/services/time-line/news-feed/news-feed.service"
import { timeLineRouting } from "./time-line.routing"

@NgModule({
  imports: [
    RouterModule.forChild(timeLineRouting),
    TranslateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [...timeLineComponents],
  exports: [...timeLineComponents],
  providers: [
    ProfileService,
    NewsFeedService
  ]
})

export class TimeLineModule {
}
