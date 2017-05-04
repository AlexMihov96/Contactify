import {Component} from "@angular/core";
import {BaseComponent} from "../../base.component";
import {Modal} from "angular2-modal/plugins/bootstrap";
import {BaseService} from "../../../services/base.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent extends BaseComponent {
  constructor(modal: Modal,
              private baseService: BaseService) {
    super(modal)
  }
}
