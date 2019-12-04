// import { Component, OnInit } from '@angular/core';
// import { User } from '../model/studentForm';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-form-studnet',
//   templateUrl: './form-studnet.component.html',
//   styleUrls: ['./form-studnet.component.scss']
// })
// export class FormStudnetComponent implements OnInit {
//   studentRegisterForm: FormGroup;
//   user: User = {
//     firstName: 'ram',
//     lastName: 'sharma',
//     StudentID : '123333',
 
//   };
//   stockname: string
 
//   constructor(
//     private formBuilder: FormBuilder
//     ) { 
//   }
//  ngOnInit() {
//    this.formDetail();
//    this.stockname = 'ram';
//   }

//   formDetail(){
//   this.studentRegisterForm = this.formBuilder.group({
//     'firstName': ['',
//      [Validators.required,
//        Validators.maxLength(20),
//        Validators.pattern("/^[A-Za-z]+$/")]],
//     'lastName': ['', 
//     [Validators.required, 
//       Validators.maxLength(6),
//       Validators.pattern("/^[A-Za-z]+$/")]],
//     'StudentID': ['', 
//       [Validators.required, 
//       Validators.minLength(6),
//       Validators.pattern("/^[0-9]+$/")]],

//   },
//   {
    
//       validator: this.formValidator
//     })
//   }
//   formValidator(form: FormBuilder ){
//     // const condition = form.get('pattern').value !== form.get('pattern').value;

//     return condition ? { firstName: true} : null; 
//   }
// }
