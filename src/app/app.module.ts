import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BreakpointDetectorModule } from './breakpoint-detector/breakpoint-detector.module';
import { BreakpointTestComponent } from './test-lab/breakpoint-test.component';


@NgModule({
  declarations: [
    AppComponent,
    BreakpointTestComponent
  ],
  imports: [
    BrowserModule,
    BreakpointDetectorModule.forRoot({
      BREAKPOINT_MOBILE : {name: 'MOBILE', value: 480},
      BREAKPOINT_TABLET_PORTRAIT : {name: 'TABLET_PORTRAIT', value: 720},
      BREAKPOINT_TABLET_LANDSCAPE : {name: 'TABLET_LANDSCAPE', value: 1024},
      BREAKPOINT_MEDIUM_DESKTOP : {name: 'DESKTOP', value: 1280},
      BREAKPOINT_LARGE_DESKTOP : {name: 'LARGE_DESKTOP', value: 1920},
      BREAKPOINT_EXTRA_LARGE_DESKTOP : {name: 'EXTRA_LARGE_DESKTOP', value: 2560}
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
