import { Injectable, EventEmitter } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {

  constructor() { }
  public status1 = new EventEmitter<string>();

  public mySub = new Subject<any>();
  
  increaseCounter(msg){
    this.mySub.next(msg);
  }
  serviceResueEmit (status): void{
    this.status1 =  status; 

  }

  accessMessage() {
    // asObservable helps us to prevent the
    // leaks of Observable from outside of the subject
    return this.mySub.asObservable();
}
}
