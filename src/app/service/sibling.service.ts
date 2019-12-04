import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {

  constructor() { }
  public mySub = new Subject<any>();

  increaseCounter(msg){
    this.mySub.next(msg);
  }
  accessMessage() {
    // asObservable helps us to prevent the
    // leaks of Observable from outside of the subject
    return this.mySub.asObservable();
}
}
