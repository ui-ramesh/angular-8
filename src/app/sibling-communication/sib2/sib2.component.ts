import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SiblingService } from 'src/app/service/sibling.service';

@Component({
  selector: 'app-sib2',
  templateUrl: './sib2.component.html',
  styleUrls: ['./sib2.component.scss']
})
export class Sib2Component implements OnInit {

  private finalMsg:any= [];

  constructor(private svc: SiblingService) { }
 

  ngOnInit() {
    
    this.svc.accessMessage().subscribe(
      (msg) => {
        this.finalMsg = (msg);
        console.log('this.finalMsg', this.finalMsg);
      }
    );
  }
  
}

