import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  Title: String;

  constructor() {
    this.Title = 'Job\'s Test Environment :)';
  }
}
