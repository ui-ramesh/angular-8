import { Component, OnInit } from '@angular/core';
import { User } from '../model/studentForm';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-studnet',
  templateUrl: './form-studnet.component.html',
  styleUrls: ['./form-studnet.component.scss']
})
export class FormStudnetComponent implements OnInit {
  studentRegisterForm: FormGroup;
  user: User = {
    firstName: '',
    lastName: '',
    StudentID : ''
  };
 
  constructor(
    private formBuilder: FormBuilder
    ) { 
  }
 ngOnInit() {
   this.formDetail();
  }

  formDetail(){
  this.studentRegisterForm = this.formBuilder.group({
    'firstName': [' ',
     [Validators.required,
       Validators.maxLength(20)]],
    'lastName': ['', 
    [Validators.required, 
      Validators.maxLength(6)]],
    'StudentID': ['', 
      [Validators.required, 
      Validators.minLength(6)]]
  });
}

}
