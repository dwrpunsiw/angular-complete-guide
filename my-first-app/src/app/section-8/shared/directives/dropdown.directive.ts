import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  isOpen = false;
  @HostListener('click') onclick(eventData: Event) {
    if (!this.isOpen) {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }
    this.isOpen = !this.isOpen;
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
}
