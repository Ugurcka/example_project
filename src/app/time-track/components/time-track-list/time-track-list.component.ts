import { Component, OnDestroy, OnInit } from "@angular/core";

import { Observable, Subscription } from "rxjs";
import { Store } from "../../store";

import { TimeTrackService } from "../../services/time-track.service";
import {Tracklist} from "../../models/time-track.model";

@Component({
  selector: 'time-track-list',
  templateUrl: './time-track-list.component.html',
  styleUrls: ['./time-track-list.component.scss']
})
export class TimeTrackListComponent implements OnInit, OnDestroy {

  tracklist: Tracklist[];
  tracklist$: Observable<any[]>;
  tracklistSubscription: Subscription;

  constructor(
    private store: Store,
    private timeTrackService: TimeTrackService
  ) {}

  ngOnInit() {
    this.tracklist$ = this.store.select('tracklist');
    this.tracklistSubscription = this.timeTrackService.getTracklist$.subscribe();
  }

  ngOnDestroy() {
    this.tracklistSubscription.unsubscribe();
  }
}
