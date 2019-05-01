import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimeTrackModule } from "./time-track/time-track.module";

// App Components
import { AppComponent } from './app.component';

// Store
import { Store } from "./time-track/store";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TimeTrackModule
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
