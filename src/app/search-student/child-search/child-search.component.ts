// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { SharingDataService } from 'src/app/service/sharing-data.service';

// @Component({
//   selector: 'app-child-search',
//   templateUrl: './child-search.component.html',
//   styleUrls: ['./child-search.component.scss']
// })
// export class ChildSearchComponent implements OnInit {
//   @Input() childMessage: string;
//   messageToChild:string;
//   messageToParent: string = "Message from Children to Parent!"
//   @Output() messageEvent = new EventEmitter<string>();
//   sendMessage() {
//     this.messageEvent.emit(this.messageToParent)
//   }

//   constructor(private shareSvc : SharingDataService) { }

//   ngOnInit() {
//     this.messageToChild = this.childMessage;

//   }


// }
