import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BreakpointDetectorService {
  currentBreakpoint$: Observable<string>;
  private _subject: Subject<string>;

  constructor() {
    this._subject = new Subject<string>();
    this.currentBreakpoint$ = this._subject.asObservable();
  }

  setBreakpoint(breakpoint) {
    this.currentBreakpoint$ = breakpoint;
    this._subject.next(breakpoint);
  }
}
