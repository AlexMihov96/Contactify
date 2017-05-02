import {Component} from "@angular/core";
import {BaseComponent} from "../../base.component";
import {Modal} from "angular2-modal/plugins/bootstrap";
import {BaseService} from "../../../services/base.service";

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent extends BaseComponent {
  constructor(modal: Modal,
              private baseService: BaseService) {
    super(modal)
  }
}
