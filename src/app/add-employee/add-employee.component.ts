import { Component, OnInit, Inject } from '@angular/core';
import { Employee, JobType } from './employee';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {

  newEmployee: Employee = new Employee();
  jobTypeItems = this.newEmployee.getJobTypes();
  skillItems = this.newEmployee.getSkills();

  employeeForm: FormGroup;
  submitted = false;
  submitSuccess: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public snackBar: MatSnackBar,
  ) { }

  // Check for mobile screens for date picker

  isMobile: boolean = false;

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      name: [],
      email: [],
      password: [],
      dateofbirth: [],
      dateOfBirth: [],
      phoneNumber: [],
      address: this.formBuilder.group({
        street_name: [],
        house_number: [],
        postal_code: [],
        city: [],
        country: [],
      }),
      job: this.formBuilder.group({
        job_typeID: [],
      }),
      hourly_wage: [],
      skillList: [],
    });
  }

  name: string;

  jobType: string;

  private mergeDates(dateValue: Date): string {
    const returnValue = dateValue.toISOString()
      .replace(/[TZ]/g, '')
      .replace('23:00:00.000', ''); // Replace T an Z with spaces to make it MySQL parsabl

    return returnValue;
  }

  submitEmployee() {
    // tslint:disable-next-line:prefer-const
    let snackBarRef = this.snackBar;
    if (this.employeeForm.invalid) {
      snackBarRef.openFromComponent(SubmitSnackbar, {
        data: {
          submit: false,
          message: 'Please fill in all required fields',
        },
        duration: 2000,
      });

      return;
    }

    snackBarRef.openFromComponent(SubmitSnackbar, {
      data: {
        submit: true,
        posted: false,
        message: 'Adding your employee',
      },
    });

    let fValue = this.employeeForm.value;
    fValue = this.employeeForm.value;
    // tslint:disable-next-line:prefer-const
    let req = fValue;

    req['dateOfBirth'] = this.mergeDates(req['dateofbirth']),
      delete req['dateofbirth'];

    console.log(JSON.stringify(req));

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.http.post<any>(
      `${environment.apiUri}/employee/add`, JSON.stringify(req), httpOptions)
      .subscribe(
        (data) => {
          console.log('POST Request is successful ', data);
          snackBarRef.openFromComponent(SubmitSnackbar, {
            data: {
              submit: true,
              posted: true,
              message: 'Your employee is added.',
            },
            duration: 5000,
          });
        },
        (error) => {
          console.log('Error', error);
          snackBarRef.openFromComponent(SubmitSnackbar, {
            data: {
              submit: false,
              posted: false,
              message: 'An error occured while adding an employee.',
            },
            duration: 5000,
          });
        },
      );
  }
}

@Component({
  selector: 'employee-submit-snack-bar',
  templateUrl: './employee-submit.html',
  styleUrls: ['./employee-submit.scss'],
})

export class SubmitSnackbar implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
  }
}
