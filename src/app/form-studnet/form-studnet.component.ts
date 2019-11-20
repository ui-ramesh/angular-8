import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import { User } from '../model/studentForm';

@Component({
  selector: 'app-form-studnet',
  templateUrl: './form-studnet.component.html',
  styleUrls: ['./form-studnet.component.scss']
})
export class FormStudnetComponent implements OnInit {
  // studentRegisterForm: FormGroup;
  // user: User = {
  //   firstName: '',
  //   lastName: '',
  //   StudentID : ''
  // };
 
  constructor(
    //private formBuilder: FormBuilder
    ) { 
  }
 ngOnInit() {
   // this.formDetail();
  }

//   formDetail(){
//   this.studentRegisterForm = this.formBuilder.group({
//     'firstName': [this.user.firstName, [Validators.required]],
//     'lastName': [this.user.lastName, [Validators.required]],
//     'StudentID': [this.user.StudentID, 
//       [Validators.required,  Validators.minLength(6)]]
//   });
// }

}
