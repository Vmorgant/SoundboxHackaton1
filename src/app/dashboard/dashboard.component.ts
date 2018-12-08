import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  sounds = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return  [
        {
          name: 'TG', cols: 1, rows: 1 ,
          url: 'taGueule.ogg'
        },
        {
          name: 'Nani', cols: 1, rows: 1 ,
          url: 'nani.ogg'
        },
        {
          name: 'Sabers', cols: 1, rows: 1 ,
          url: 'lightSaber.ogg'
        },
      ];
    })
  );

  audio = new Audio();

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {}

  playSound(sound:string) {
    this.audio.src="./assets/audio/".concat(sound);
    this.audio.load();
    this.audio.play();
  }
}
