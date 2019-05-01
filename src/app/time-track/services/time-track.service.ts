import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { tap } from "rxjs/internal/operators/tap";
import { Store } from "../store";

// Models
import { Tracklist } from "../models/time-track.model";

@Injectable()
export class TimeTrackService {

  getTracklist$: Observable<Tracklist[]> = this.http
    .get('/tracklist')
    .pipe(
      tap(next => this.store.set('tracklist', next))
    ) as Observable<Tracklist[]>;

  constructor(
    private http: HttpClient,
    private store: Store
  ) {}
}
