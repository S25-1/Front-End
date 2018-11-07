import { Component, OnInit } from '@angular/core';
import { Vacancy, JobType } from './vacancy';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-vacancy',
  templateUrl: './add-vacancy.component.html',
  styleUrls: ['./add-vacancy.component.scss'],
})
export class AddVacancyComponent implements OnInit {
  // TODO: Add base URI
  apiUri: string = 'https://cgi-group1.azurewebsites.net/api';

  newVacancy: Vacancy = new Vacancy();
  jobTypeItems = this.newVacancy.getJobTypes();
  skillItems = this.newVacancy.getSkills();

  // Form Tests
  vacancyForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

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
      userID: ['1'],
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
    .replace(' 00:00', ` ${timeValue}`);  // Replace unspecified time with time input values

    return returnValue;
  }

  private submitVacancy() {
    if (this.vacancyForm.invalid) { return; }

    let fValue = this.vacancyForm.value;
    fValue = this.vacancyForm.value;
    let req = fValue;

    req['beginDateTime'] = this.mergeDates(req['beginDate'], req['beginTime']),
    req['endDateTime'] = this.mergeDates(req['beginDate'], req['endTime']),

    // Delete unnecessary values
    delete req['beginDate'];
    delete req['beginTime'];
    delete req['endTime'];

    req = JSON.stringify(req);

    console.log(req);

    this.http.post(`${this.apiUri}/vacancy/add`, JSON.stringify(req));
  }
}
