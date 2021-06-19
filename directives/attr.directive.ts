import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  constructor(private eref:ElementRef) {
    this.eref.nativeElement.style.color="green";
    this.eref.nativeElement.style.backgroundColor='yellow';
   }

}
