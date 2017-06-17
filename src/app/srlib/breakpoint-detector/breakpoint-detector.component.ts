import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-breakpoint-detector',
  template: `
    <p>
      breakpoint-detector Works!sd
    </p>
  `,
  styles: []
})
export class BreakpointDetectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('hossdft');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event.target.innerWidth);
  }
}
