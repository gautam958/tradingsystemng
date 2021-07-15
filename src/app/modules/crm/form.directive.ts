import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  // selector: '[appForm]',
  //selector: '[focusInvalidInput]',
  selector: 'autofocus',
})
export class FormDirective implements AfterViewInit {
  constructor(private el: ElementRef) {
    console.log('Hell from Form Directives 45646456546 ');
  }
  ngAfterViewInit(): void {
    this.el.nativeElement.focus();
  }

  @HostListener('submit')
  onSubmit() {
    console.log('Hell from Form Directives llll ');
    const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');

    if (invalidControl) {
      invalidControl.focus();
      console.log('Hell from Form Directives');
    }
  }
}
