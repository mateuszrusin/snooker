import {Component, Input} from "@angular/core";
import {Config} from "../../../shared/data/config";

@Component({
  selector: 'creator-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  readonly URL_IMG = Config.SERVER_URL + 'img/';
  readonly URL_UPLOAD = Config.SERVER_URL + 'upload/';

  @Input() user: any;
  @Input() title: string;

  onUpload(event) {
    this.user.photo = event.xhr.response;
  }


}
