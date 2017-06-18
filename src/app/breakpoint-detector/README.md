Angular Directive for break point detection 


####**Installation**

    npm install breakpoint-detector 

####**Steps**
1. Import **BreakpointDetectorModule**
2. Configure breakpoints (optional)
3. add **appBreakpointDetector** *directive* to ***root module*** container div
4. subscribe to the break point change in component (s)



####**1.Import BreakpointDetectorModule**
```
import {BreakpointDetectorModule} from './breakpoint-detector/breakpoint-detector.module';
```

####**2.Configure breakpoints (optional)**

 - **Use Existing breakpoints**

*sample **app.module.ts***

```
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {BreakpointDetectorModule} from './breakpoint-detector/breakpoint-detector.module';

@NgModule({
  declarations: [... ],
  imports: [
    BreakpointDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
 - **Configure breakpoints**
 
*sample **app.module.ts***
```
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {BreakpointDetectorModule} from './breakpoint-detector/breakpoint-detector.module';

@NgModule({
  declarations: [.....],
  imports: [
    BreakpointDetectorModule.forRoot({
	    BREAKPOINT_MOBILE : {name: 'MOBILE', value: 480},
	    BREAKPOINT_TABLET_PORTRAIT : {name: 'TABLET_PORTRAIT', value: 720},
	    BREAKPOINT_TABLET_LANDSCAPE : {name: 'TABLET_LANDSCAPE', value: 1024},
	    BREAKPOINT_MEDIUM_DESKTOP : {name: 'DESKTOP', value: 1280},
	    BREAKPOINT_LARGE_DESKTOP : {name: 'LARGE_DESKTOP', value: 1920},
	    BREAKPOINT_EXTRA_LARGE_DESKTOP : {name: 'EXTRA_LARGE_DESKTOP', value: >2560}
	    })
  ],
  providers: [....],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
####3.add ***appBreakpointDetector*** directive to root module container div
*app.component.html*
```
<div appBreakpointDetector >
 
 ..... add  directive on root component html ( only once ) 
 
 </div>
```
####**4. Subscribe** to the break point change in *component(s)*

*app.component.ts*

```
import { BreakpointDetectorService } from '../breakpoint-detector/breakpoint-detector.service';
import 'rxjs/add/operator/distinctUntilChanged';

....

constructor(private service: BreakpointDetectorService, private cdRef: ChangeDetectorRef) {
    this.service.currentBreakpoint$
      .distinctUntilChanged()
      .subscribe((newBreakpoint: string) => {
        this.breakpoint = newBreakpoint;
        this.cdRef.detectChanges();
        
		//do someting with newBreakpoint
		
      });
  }
```


----------


**Dependencies**
```
 "@angular/common": "^4.0.0",
 "@angular/compiler": "^4.0.0",
 "@angular/core": "^4.0.0",
 "@angular/platform-browser": "^4.0.0",
```