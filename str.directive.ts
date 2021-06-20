import { Directive, TemplateRef, ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class StrDirective {

  constructor(private viewcontainer:ViewContainerRef,private templateref:TemplateRef<null>) { }
  @Input() set appIf(boolean){
     if(boolean){
        this.viewcontainer.createEmbeddedView(this.templateref);
     }
     else {
       this.viewcontainer.clear();
     }
  }

}
