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
          url: 'taGueule.ogg',
          img: './assets/img/taGueule.png'
        },
        {
          name: 'Nani', cols: 1, rows: 1 ,
          url: 'nani.ogg',
          img: './assets/img/nani.jpg'
        },
        {
          name: 'Sabers', cols: 1, rows: 1 ,
          url: 'lightSaber.ogg',
          img: './assets/img/lightSaber.jpg'
        },
        {
          name: 'Boulette', cols: 1, rows: 1 ,
          url: 'boulette.mp3',
          img: './assets/img/boulette.jpg'
        },
        {
          name: 'CestPasFaux', cols: 1, rows: 1 ,
          url: 'cestPasFaux.m4a',
          img: './assets/img/cestPasFaux.jpg'
        },
        {
          name: 'Gigapouet', cols: 1, rows: 1 ,
          url: 'gigapouet.mp3',
          img: './assets/img/gigapouet.jpg'
        },
        {
          name: 'Joker', cols: 1, rows: 1 ,
          url: 'joker.mp3',
          img: './assets/img/joker.jpg'
        },
        {
          name: 'Question', cols: 1, rows: 1 ,
          url: 'laQuestion.aac',
          img: './assets/img/laQuestion.jpg'
        },
        {
          name: 'Stephanie', cols: 1, rows: 1 ,
          url: 'stephanie.ogg',
          img: './assets/img/stephanie.jpg'
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
