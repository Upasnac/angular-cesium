import { Directive, ElementRef } from '@angular/core';
import { Viewer } from 'cesium'
@Directive({
  selector: '[appCesiumMap]'
})
export class CesiumMapDirective {
    viewer: Viewer;

    constructor(private el: ElementRef) {
      this.viewer=new Viewer(this.el.nativeElement)
     }

}
