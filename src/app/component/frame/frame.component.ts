import { Component } from '@angular/core';
import {Config} from "../../service/config/config.service";

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent {

  private frames: string

  constructor(config: Config) {
    this.frames = config.get('game.frames');
  }
}
