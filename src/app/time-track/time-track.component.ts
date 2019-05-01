import { Component } from "@angular/core";

@Component({
  selector: 'time-track',
  template: `
    <div id="centered">
      <time-track-list></time-track-list>
    </div>
  `,
  styles: [`    
    #centered {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  `]
})
export class TimeTrackComponent {

}
