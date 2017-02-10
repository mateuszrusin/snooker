import {Component, Input} from '@angular/core';
import {TranslateService} from "ng2-translate";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

    @Input() value: string;
    @Input() class: string;
    @Input() prefix: string;

    constructor(private translate: TranslateService) {}

}
