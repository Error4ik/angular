import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color;
  @Input() appStyle2 = {border: '', borderRadius: '', fontWeight: ''};

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(el.nativeElement, 'color', '#ff9e4a');
  }

  @HostBinding('style.color') elColor = null;
  @HostBinding('style.border') elBorder = null;
  @HostBinding('style.borderRadius') elBorderRadius = null;
  @HostBinding('style.fontWeight') fontWeight = null;

  @HostListener('click', ['$event.target'])
  onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter')
  onEnter() {
    this.elColor = this.color;
    this.elBorder = this.appStyle2.border;
    this.elBorderRadius = this.appStyle2.borderRadius;
    this.fontWeight = this.appStyle2.fontWeight;
    // this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.appStyle2.fontWeight);
    // this.renderer.setStyle(this.el.nativeElement, 'border', this.appStyle2.border);
    // this.renderer.setStyle(this.el.nativeElement, 'borderRadius', this.appStyle2.borderRadius);
  }

  @HostListener('mouseleave')
  onLeave() {
    this.elColor = null;
    this.elBorder = null;
    this.elBorderRadius = null;
    this.fontWeight = null;
    // this.renderer.setStyle(this.el.nativeElement, 'color', null);
    // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null);
    // this.renderer.setStyle(this.el.nativeElement, 'border', null);
    // this.renderer.setStyle(this.el.nativeElement, 'borderRadius', null);
  }
}
