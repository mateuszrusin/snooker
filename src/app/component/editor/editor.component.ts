import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

    @Input() value: string;
    @Input() class: string;


      ngOnInit() {

      }

}
