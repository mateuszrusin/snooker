import {Component, OnInit, Input} from '@angular/core';
import {State} from "../../type/state";

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent {

  @Input() state: State;

}
