import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCange]'
})
export class CangeDirective {

  constructor(private el:ElementRef) {
    if(el.nativeElement.clicked==true){
      el.nativeElement.innerText="added to yor cart"
    }
   }

}
