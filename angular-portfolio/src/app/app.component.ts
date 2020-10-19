import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-portfolio';

  constructor() {}

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }
}
