import {Component} from "@angular/core";
import {BaseComponent} from "../../base.component";
import {Modal} from "angular2-modal/plugins/bootstrap";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent extends BaseComponent {
 constructor(modal:Modal){
   super(modal)
 }
}
