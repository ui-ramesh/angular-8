import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailService {

  constructor(private http: HttpClient) { }
  studentDetail() : Observable<any[]>  {
  
    return this.http.get<any[]>("http://localhost:4200/assets/json/studentDetai.json");
}





}

