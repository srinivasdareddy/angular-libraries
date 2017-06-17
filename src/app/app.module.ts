import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SRLibModule } from './srlib/srlib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SRLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
