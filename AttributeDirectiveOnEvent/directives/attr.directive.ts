import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  constructor(private eref:ElementRef) {
    // this.eref.nativeElement.style.color="green";
    // this.eref.nativeElement.style.backgroundColor='yellow';
   }
   //host listener is used for events 
   @HostListener('mouseover') onMouseOver(){
    this.eref.nativeElement.style.color="green";
    this.eref.nativeElement.style.backgroundColor='yellow';
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.eref.nativeElement.style.color="yellow";
    this.eref.nativeElement.style.backgroundColor='green';
   }

}
