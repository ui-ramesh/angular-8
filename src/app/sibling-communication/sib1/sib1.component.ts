import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SiblingService } from 'src/app/service/sibling.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sib1',
  templateUrl: './sib1.component.html',
  styleUrls: ['./sib1.component.scss']
})
export class Sib1Component implements OnInit {

  msg: [] = [];
  @Input() childMessage: any; 
  @Output() messageEvent = new EventEmitter<any>();
  messageToChild: string;
  studentRegisterForm: FormGroup;
  constructor(private svc: SiblingService,
    private formBuilder: FormBuilder) { }
    statusVal:string ='why is commumication';
  sendMessage() {
    this.messageEvent.emit(this.msg)
  }
  public data = new Date(); 

  ngOnInit() {
    this.messageToChild = this.childMessage;
    this.formDetail();
    this.studentRegisterForm.reset();
    this. sentStatus();
  }
  addMessage() {
    this.svc.increaseCounter(this.msg);
    this.sendMessage();
  }
  sentStatus(){
    this.svc.status1.emit(this.statusVal);
  }
  formDetail() {
    this.studentRegisterForm = this.formBuilder.group({
      firstName: ['',
        [Validators.required,
          Validators.minLength(5)]],
      lastName: ['',
        [Validators.required,
          Validators.minLength(5)]],
      StudentID: ['',
        [Validators.required,
          Validators.minLength(6),
          Validators.pattern('(?!0)^[0-9]*')]],

    })

  }


  submit() {
    this.msg = this.studentRegisterForm.value;
    this.addMessage()
    this.studentRegisterForm.reset()

  }

}
