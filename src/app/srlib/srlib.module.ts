import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointDetectorDirective } from './breakpoint-detector.directive';
import { WindowRefService } from './window-ref.service';
import { BreakpointDetectorService } from './breakpoint-detector.service';
import { BreakpointTesterComponent } from './breakpoint-tester.component';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [
    BreakpointDetectorDirective,
    BreakpointTesterComponent
  ],

  providers: [
    WindowRefService,
    BreakpointDetectorService
  ],

  exports: [
    BreakpointDetectorDirective,
    BreakpointTesterComponent
  ]
})
export class SRLibModule { }
