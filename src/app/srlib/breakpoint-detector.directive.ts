import { AfterViewInit, Directive, HostListener } from '@angular/core';

import { Breakpoints } from './constants';
import { WindowRefService } from './window-ref.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

@Directive({
  selector: '[appBreakpointDetector]'
})
export class BreakpointDetectorDirective implements AfterViewInit {

  public currentBreakPoint: string;
  private _window: Window;

  private _resizeSubject = new Subject<number>();
  private _resizeObservable = this._resizeSubject.asObservable().debounceTime(250);

  constructor (
    windowRef: WindowRefService
  ) {
    this._window = windowRef.nativeWindow;
  }

  ngAfterViewInit() {
    console.log(this._window);
    this.setBreakPoint(this._window.innerWidth);
    this._resizeObservable.subscribe(x => this.setBreakPoint(x));
  }


  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width) {
    this._resizeSubject.next(width);
  }

  setBreakPoint(width: number) {

    if (width <= Breakpoints.BREAKPOINT_MOBILE.value) {
      this.currentBreakPoint =  Breakpoints.BREAKPOINT_MOBILE.name;
    } else if (width >= Breakpoints.BREAKPOINT_TABLET_POTRAIT.value && width < Breakpoints.BREAKPOINT_TABLET_LANDSCAPE.value) {
      this.currentBreakPoint =  Breakpoints.BREAKPOINT_TABLET_POTRAIT.name;
    } else if (width >= Breakpoints.BREAKPOINT_TABLET_LANDSCAPE.value && width < Breakpoints.BREAKPOINT_MEDIUM_DESKTOP.value) {
      this.currentBreakPoint =  Breakpoints.BREAKPOINT_TABLET_LANDSCAPE.name;
    } else if (width >=  Breakpoints.BREAKPOINT_MEDIUM_DESKTOP.value && width <  Breakpoints.BREAKPOINT_LARGE_DESKTOP.value) {
      this.currentBreakPoint =  Breakpoints.BREAKPOINT_MEDIUM_DESKTOP.name;
    } else if (width >=  Breakpoints.BREAKPOINT_LARGE_DESKTOP.value && width <  Breakpoints.BREAKPOINT_EXTRA_LARGE_DESKTOP.value) {
      this.currentBreakPoint =  Breakpoints.BREAKPOINT_LARGE_DESKTOP.name;
    } else if (width >=  Breakpoints.BREAKPOINT_EXTRA_LARGE_DESKTOP.value ) {
      this.currentBreakPoint =  Breakpoints.BREAKPOINT_EXTRA_LARGE_DESKTOP.name;
    }

    console.log(this.currentBreakPoint);
  }

}
