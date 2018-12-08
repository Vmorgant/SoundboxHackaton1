import { Component, OnInit } from '@angular/core';
import { SOUNDS } from '../mock-sounds';

@Component({
  selector: 'app-play-grid',
  templateUrl: './play-grid.component.html',
  styleUrls: ['./play-grid.component.css']
})
export class PlayGridComponent implements OnInit {
  sounds = SOUNDS;
  audio=new Audio();
  constructor() { }
  ngOnInit() {
  }

  playSound(sound:string){
    this.audio.src="./assets/audio/".concat(sound);
    //alert(this.audio.src);
    this.audio.load();
    this.audio.play();
  }
}
