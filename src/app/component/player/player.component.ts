import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.css']
})
export class PlayerComponent implements OnInit {

  readonly IMG_URL = 'http://localhost:3000/img/';

  @Input() player: any;

  constructor() { }

  ngOnInit() {
  }

  onUpload(event) {
    this.player.photo = event.xhr.response;
  }

}
