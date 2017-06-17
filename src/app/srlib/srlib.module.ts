import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointDetectorComponent } from './breakpoint-detector/breakpoint-detector.component';
import { BreakpointDetectorDirective } from './breakpoint-detector.directive';
import { WindowRefService } from './window-ref.service';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [
    BreakpointDetectorComponent,
    BreakpointDetectorDirective
  ],

  providers: [
    WindowRefService
  ],

  exports: [
    BreakpointDetectorDirective
  ]
})
export class SRLibModule { }
