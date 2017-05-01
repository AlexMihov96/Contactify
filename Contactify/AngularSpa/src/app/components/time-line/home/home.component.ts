import {Component} from "@angular/core";
import {BaseComponent} from "../../base.component";
import {Modal} from "angular2-modal/plugins/bootstrap";

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent extends BaseComponent {
  constructor(modal: Modal) {
    super(modal)
  }
}
