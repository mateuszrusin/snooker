import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    constructor(private result: any, route: ActivatedRoute) {
        route.params.subscribe(params => {
            this.result.start(params['id']);
        });
    }

    ngOnInit() {

    }
}
