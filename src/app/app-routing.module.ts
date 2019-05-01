import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App Modules
import { TimeTrackModule } from "./time-track/time-track.module";

const routes: Routes = [
  {
    path: 'time-track',
    loadChildren: () => TimeTrackModule
  },
  {
    path: '**',
    redirectTo: 'time-track'
  },
  {
    path: '',
    redirectTo: 'time-track',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
