import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {

  // Set minimal values for date input
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(); // Current date

  // Check for mobile screens for date picker

  isMobile: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
