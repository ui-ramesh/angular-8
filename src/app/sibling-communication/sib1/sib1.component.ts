import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SiblingService } from 'src/app/service/sibling.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

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
  studentRegisterForm: any;
  constructor(private svc: SiblingService,
    private formBuilder: FormBuilder) { }
  sendMessage() {
    this.messageEvent.emit(this.msg)
  }

  ngOnInit() {
    this.messageToChild = this.childMessage;
    this.formDetail();
    this.studentRegisterForm.reset();
  }
  addMessage() {
    this.svc.increaseCounter(this.msg);
    this.sendMessage();
  }
  formDetail() {
    this.studentRegisterForm = this.formBuilder.group({
      firstName: ['',
        [
          Validators.maxLength(20),
          this.emptySpaceValidator]],
      lastName: ['',
        [
          Validators.maxLength(60),
          this.emptySpaceValidator]],
      StudentID: ['',
        [
          Validators.minLength(6),
          Validators.pattern('(?!0)^[0-9]*'),
          this.emptySpaceValidator]],

    })

  }

  public emptySpaceValidator(control: FormControl) {
    if ((!control.value || control.value.maxLength === 0)) {
      return null;
    }
    const spaceOccp = control.value.trim().length === 0;
    {
      return !spaceOccp ? null : { emptySpace: true };
    }


  }

  submit() {
    this.msg = this.studentRegisterForm.value;
    this.addMessage()
    this.studentRegisterForm.reset()

  }

}
