import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageDetail } from '../model/image';

@Injectable({
  providedIn: 'root'
})
export class ImnageDetailService {



 
    constructor(private http: HttpClient) { }
    
   
      imageInfo() : Observable<ImageDetail[]>  {
  
         return this.http.get<ImageDetail[]>("http://localhost:4200/assets/json/imageDetail.json");
  
             
    }
  }



