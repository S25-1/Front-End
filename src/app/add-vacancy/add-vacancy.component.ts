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
    });
  }

  // Set limit for date picker
  minDate = new Date();

  name: string;

  jobType: string;

  private mergeDates(dateValue: string, timeValue: string): string {
    const returnValue = dateValue.toString().replace(' 00:00', ` ${timeValue}`);

    return returnValue;
  }

  private submitVacancy() {
    if (this.vacancyForm.invalid) {
      return;
    }
    const fControls = this.vacancyForm.controls;
    let fValue = this.vacancyForm.value;

    // fControls['beginDateTime'].setValue(
    //   this.mergeDates(fValue['beginDate'], fValue['beginTime']),
    // );

    // fControls['endDateTime'].setValue(
    //   this.mergeDates(fValue['beginDate'], fValue['endTime']),
    // );

    fValue = this.vacancyForm.value;
    let req = fValue;

    req['beginDateTime'] = this.mergeDates(req['beginDate'], req['beginTime']),
    req['endDateTime'] = this.mergeDates(req['beginDate'], req['endTime']),

    // Delete unnecessary values
    delete req['beginDate'];
    delete req['beginTime'];
    delete req['endTime'];

    req = JSON.stringify(req);

    // console.log(req);

    this.http.post(`${this.apiUri}/vacancy/add`, JSON.stringify(req));
  }
}
