import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appColorExample]'
})
export class ColorExampleDirective {

  constructor(elr:ElementRef) { 
    elr.nativeElement.style.color='green';
  }

}



