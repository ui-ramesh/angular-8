

import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'upp'
})

export class UpperC implements PipeTransform{
 transform(value : string){
     if(value == value.toUpperCase()){
        return value.toLowerCase();
     }
    return value.toUpperCase()
 
    }
 
}