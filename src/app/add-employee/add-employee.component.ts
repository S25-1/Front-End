import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material';
import { Employee, JobType, } from './employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {

  apiUri: string = 'https://cgi-group1.azurewebsites.net/api';

  newEmployee: Employee = new Employee();
  jobTypeItems = this.newEmployee.getJobTypes();
  skillItems = this.newEmployee.getSkills();

  vacancyForm: FormGroup;
  submitted = false;
  submitSuccess: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public snackBar: MatSnackBar,
    ) { }

  // Set minimal values for date input
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(); // Current date

  // Check for mobile screens for date picker

  isMobile: boolean = false;

 

  ngOnInit() {
    this.vacancyForm = this.formBuilder.group({
      name: [],
      email: [],
      password: [],
      dateofbirth: [],
      phonenumber: [],
      address: [],
      jobType: [],
      hourlywage: [],
      beginDateTime: [],
      endDateTime: [],
    });
  }

}
