import { stringify } from '@angular/compiler/src/util';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  constructor(private element: ElementRef) {
    
   }

   @Input() set appClass(color: string){
    this.element.nativeElement.style.backgroundColor = color
   }

}
