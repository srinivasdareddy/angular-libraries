import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointDetectorDirective } from './breakpoint-detector.directive';
import { WindowRefService } from './breakpoint-detector-window-ref.service';
import { BreakpointDetectorService } from './breakpoint-detector.service';
import { BREAKPOINT_DETECTOR_CONFIG } from './breakpoint-detector.config';
import { BreakpointDetectorConfig } from './breakpoint-detector.interface';

export const BREAKPOINT_PROVIDERS: Provider[] = [
  WindowRefService,
  BreakpointDetectorService,
];

@NgModule({
  imports: [CommonModule],
  declarations: [BreakpointDetectorDirective],
  exports: [BreakpointDetectorDirective],
})
export class BreakpointDetectorModule {
  static forRoot(config?: BreakpointDetectorConfig): ModuleWithProviders {
    return {
      ngModule: BreakpointDetectorModule,
      providers: [
        BREAKPOINT_PROVIDERS,
        {
          provide: BREAKPOINT_DETECTOR_CONFIG,
          useValue: config || {
            BREAKPOINT_MOBILE: { name: 'MOBILE', value: 480 },
            BREAKPOINT_TABLET_PORTRAIT: { name: 'TABLET_PORTRAIT', value: 720 },
            BREAKPOINT_TABLET_LANDSCAPE: {
              name: 'TABLET_LANDSCAPE',
              value: 1024,
            },
            BREAKPOINT_MEDIUM_DESKTOP: { name: 'DESKTOP', value: 1280 },
            BREAKPOINT_LARGE_DESKTOP: { name: 'LARGE_DESKTOP', value: 1920 },
            BREAKPOINT_EXTRA_LARGE_DESKTOP: {
              name: 'EXTRA_LARGE_DESKTOP',
              value: 2560,
            },
          },
        },
      ],
    };
  }
}
