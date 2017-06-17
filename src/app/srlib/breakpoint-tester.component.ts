import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BreakpointDetectorService } from './breakpoint-detector.service';

import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-breakpoint-tester',
  template: `
    <p>
      current breakpoint ! {{ breakpoint }}
    </p>
  `,
  styles: []
})
export class BreakpointTesterComponent implements OnInit {
  public breakpoint: string;
  
  constructor(BService: BreakpointDetectorService, private cdRef: ChangeDetectorRef) {
    BService.currentBreakpoint$
      .distinctUntilChanged()
      .subscribe((newBreakpoint: string) => {
        this.breakpoint = newBreakpoint;
        
        /* ERROR Error: ExpressionChangedAfterItHasBeenCheckedError:
        Expression has changed after it was checked.
        Previous value: 'undefined'. Current value: 'MOBILE' */
        this.cdRef.detectChanges();
    });
  }

  ngOnInit() {
    console.log('com init', this.breakpoint);
  }

}
