import { Component, OnInit, Inject } from '@angular/core';
import { Vacancy, JobType } from './vacancy';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-add-vacancy',
  templateUrl: './add-vacancy.component.html',
  styleUrls: ['./add-vacancy.component.scss'],
})
export class AddVacancyComponent implements OnInit {
  // TODO: Add base URI
  // apiUri: string = 'https://cgi-group1.azurewebsites.net/api';

  newVacancy: Vacancy = new Vacancy();
  jobTypeItems = this.newVacancy.getJobTypes();
  skillItems = this.newVacancy.getSkills();

  // Form Tests
  vacancyForm: FormGroup;
  submitted = false;
  submitSuccess: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public snackBar: MatSnackBar,
    ) { }

  ngOnInit() {
    this.vacancyForm = this.formBuilder.group({
      name: [],
      jobType: [],
      description: [],
      beginDate: [],
      beginTime: [],
      endTime: [],
      requiredSkills: [],
      minimalExperience: [],
      beginDateTime: [],
      endDateTime: [],
      userID: [localStorage.getItem('user_id')],
    });
  }

  // Set limit for date picker
  minDate = new Date();

  name: string;

  jobType: string;

  // Merges date and timepicks and coverts it to a MySQL parsable format
  private mergeDates(dateValue: Date, timeValue: string): string {
    const returnValue = dateValue.toISOString()
    .replace(/[TZ]/g, ' ')                // Replace T an Z with spaces to make it MySQL parsable
    .replace(' 23:00', ` ${timeValue}`);  // Replace unspecified time with time input values

    return returnValue;
  }

  submitVacancy() {
    let snackBarRef = this.snackBar;

    if (this.vacancyForm.invalid) {
      snackBarRef.openFromComponent(SubmitSnackbar, {
        data: {
          submit : false,
          message: 'Please fill in all required fields',
        },
        duration: 2000,
      });

      return;
    }

    snackBarRef.openFromComponent(SubmitSnackbar, {
      data: {
        submit : true,
        posted: false,
        message : 'Posting your vacancy',
      },
    });

    let fValue = this.vacancyForm.value;
    fValue = this.vacancyForm.value;
    let req = fValue;

    req['beginDateTime'] = this.mergeDates(req['beginDate'], req['beginTime']),
    req['endDateTime'] = this.mergeDates(req['beginDate'], req['endTime']),

    // Delete unnecessary values
    delete req['beginDate'];
    delete req['beginTime'];
    delete req['endTime'];

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };

    this.http.post<any>(
      `${environment.apiUri}/vacancy/add`, JSON.stringify(req), httpOptions)
        .subscribe(
          (data) => {
            console.log('POST Request is successful ', data);
            snackBarRef.openFromComponent(SubmitSnackbar, {
              data: {
                submit : true,
                posted: true,
                message : 'Your vacancy is posted.',
              },
              duration: 5000,
            });
          },
          (error) => {
            console.log('Error', error);
            snackBarRef.openFromComponent(SubmitSnackbar, {
              data: {
                submit : false,
                posted: false,
                message : 'An error occured while adding your vacancy.',
              },
              duration: 5000,
            });
          },
        );
  }
}

@Component({
  selector: 'vacancy-submit-snack-bar',
  templateUrl: './vacancy-submit.html',
  styleUrls: ['./vacancy-submit.scss'],
})

export class SubmitSnackbar implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
  }
}
