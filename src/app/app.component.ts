import { Component, OnInit } from '@angular/core';
import { navItem } from './model/navItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 

  ngOnInit(){
    
  }
  
  links  = [

    {
      label:'Student Table',
      path:'table'
    },
    {
      label:'Image',
      path:'image'
    },
    {
      label:'Search Form',
      path:'search'
    },
    {
      label:' Stdent Form',
      path:'form'
    }

   
  ]
}
