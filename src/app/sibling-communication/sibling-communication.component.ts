import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sibling-communication',
  templateUrl: './sibling-communication.component.html',
  styleUrls: ['./sibling-communication.component.scss']
})
export class SiblingCommunicationComponent implements OnInit {
constructor(){}
objDate = Date.now(); 
parentMessage = "Please Enter the form Perfect"
  message :any = {};
  ngOnInit() {
    this.objDate;
  }
  receiveMessage ($event) {
    this.message = $event
    console.log('$event', this.message);
  }

}
