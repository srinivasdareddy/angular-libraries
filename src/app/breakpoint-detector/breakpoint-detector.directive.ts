import { AfterViewInit, Directive, HostListener, Inject } from '@angular/core';

import { BreakpointDetectorService } from './breakpoint-detector.service';
import { WindowRefService } from './breakpoint-detector-window-ref.service';
import { BREAKPOINT_DETECTOR_CONFIG } from './breakpoint-detector.config';
import { BreakpointDetectorConfig } from './breakpoint-detector.interface';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

@Directive({
  selector: '[appBreakpointDetector]',
})
export class BreakpointDetectorDirective implements AfterViewInit {
  public currentBreakPoint: string;
  private _window: Window;
  private _resizeSubject = new Subject<number>();
  private _resizeObservable = this._resizeSubject
    .asObservable()
    .debounceTime(250);

  constructor(
    private windowRef: WindowRefService,
    private BService: BreakpointDetectorService,
    @Inject(BREAKPOINT_DETECTOR_CONFIG)
    private config: null | BreakpointDetectorConfig,
  ) {
    this._window = windowRef.nativeWindow;
  }

  ngAfterViewInit() {
    this.setBreakPoint(this._window.innerWidth);
    this._resizeObservable.subscribe(x => this.setBreakPoint(x));
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width) {
    this._resizeSubject.next(width);
  }

  setBreakPoint(width: number) {
    if (width <= this.config.BREAKPOINT_MOBILE.value) {
      this.currentBreakPoint = this.config.BREAKPOINT_MOBILE.name;
    } else if (
      width >= this.config.BREAKPOINT_TABLET_PORTRAIT.value &&
      width < this.config.BREAKPOINT_TABLET_LANDSCAPE.value
    ) {
      this.currentBreakPoint = this.config.BREAKPOINT_TABLET_PORTRAIT.name;
    } else if (
      width >= this.config.BREAKPOINT_TABLET_LANDSCAPE.value &&
      width < this.config.BREAKPOINT_MEDIUM_DESKTOP.value
    ) {
      this.currentBreakPoint = this.config.BREAKPOINT_TABLET_LANDSCAPE.name;
    } else if (
      width >= this.config.BREAKPOINT_MEDIUM_DESKTOP.value &&
      width < this.config.BREAKPOINT_LARGE_DESKTOP.value
    ) {
      this.currentBreakPoint = this.config.BREAKPOINT_MEDIUM_DESKTOP.name;
    } else if (
      width >= this.config.BREAKPOINT_LARGE_DESKTOP.value &&
      width < this.config.BREAKPOINT_EXTRA_LARGE_DESKTOP.value
    ) {
      this.currentBreakPoint = this.config.BREAKPOINT_LARGE_DESKTOP.name;
    } else if (width >= this.config.BREAKPOINT_EXTRA_LARGE_DESKTOP.value) {
      this.currentBreakPoint = this.config.BREAKPOINT_EXTRA_LARGE_DESKTOP.name;
    }
    this.BService.setBreakpoint(this.currentBreakPoint);
  }
}
