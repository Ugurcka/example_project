import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";

// App Components
import { TimeTrackComponent } from "./time-track.component";
import { TimeTrackListComponent } from "./components/time-track-list/time-track-list.component";

// App Services
import { TimeTrackService } from "./services/time-track.service";

const routes: Routes = [
  { path: '', component: TimeTrackComponent }
];

@NgModule({
  declarations: [
    TimeTrackComponent,
    TimeTrackListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    TimeTrackService
  ],
  exports: [
    TimeTrackListComponent
  ]
})
export class TimeTrackModule {

}
