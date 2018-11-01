import { Component, OnInit } from '@angular/core';
import 'materialize-css/dist/js/materialize.min.js';

declare var M: any;

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: [
    './timepicker.component.scss',
  ],

})
export class TimepickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const timepicker = document.querySelectorAll('.timepicker');
    M.Timepicker.init(timepicker);
  }
}
