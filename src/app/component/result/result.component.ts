import {Component, OnInit} from "@angular/core";
import {Result} from "../../service/result/result.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    constructor(private result: Result, route: ActivatedRoute) {
        route.params.subscribe(params => {
            this.result.start(params['id']);
        });
    }

    ngOnInit() {

    }
}
