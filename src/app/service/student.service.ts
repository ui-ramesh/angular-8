import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  imageInfo() {
    throw new Error("Method not implemented.");
  }

 
  constructor(private http: HttpClient) { }
  
 
    studentInfo() : Observable<Student[]>  {

       return this.http.get<Student[]>("http://localhost:4200/assets/json/student.json");

           
  }
}
