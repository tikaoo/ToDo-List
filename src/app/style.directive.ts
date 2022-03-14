import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  

  constructor(
    private el:ElementRef) {
      this.el.nativeElement.style.color="white"
      this.el.nativeElement.style.backgroundColor="red"
      this.el.nativeElement.style.border="none"
      this.el.nativeElement.style.borderRadius="3px"
      this.el.nativeElement.style.height="36px"
      this.el.nativeElement.style.width="100px"
      this.el.nativeElement.style.cursor="pointer"

     }

}
