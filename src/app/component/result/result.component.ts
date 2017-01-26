import {Component, OnInit} from "@angular/core";
import {Result} from "../../service/result/result.service";

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    constructor(private result: Result) {}

    ngOnInit() {

    }
}
