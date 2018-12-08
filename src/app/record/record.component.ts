import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  recordMessage='Cliquez sur ce bouton pour enregistrer votre message';
  audio = new Audio();
  constructor() { }

  ngOnInit() {
  }
  recordStart(){
    this.recordMessage="Enregistrement en cours";
    
  }
}
