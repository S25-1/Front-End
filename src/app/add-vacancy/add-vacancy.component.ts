import { Component, OnInit } from '@angular/core';
import { Vacancy, JobType } from './vacancy';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-vacancy',
  templateUrl: './add-vacancy.component.html',
  styleUrls: ['./add-vacancy.component.scss'],
})
export class AddVacancyComponent implements OnInit {

  newVacancy: Vacancy = new Vacancy();
  jobTypeItems = this.newVacancy.getJobTypes();
  skillItems = this.newVacancy.getSkills();

  // Form Tests
  vacancyForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  // Set limit for date picker
  minDate = new Date();

  name: string;

  beginDate: Date;
  beginTime: string;
  endTime: string;

  minimalExperience: string;

  jobType: string;

  // mergedDates: any;

  // mergeDates() {
  //   // let test = moment(this.beginTime);
  //   // console.log(test);
  //   // test = moment(this.beginDate);
  //   // test.set
  //   let date = moment(this.beginDate);
  //   console.log(moment(date).add(this.beginTime, 'hours'));
  //   // console.log(date);
  // }

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
    });
  }

  submitVacancy() {
    // alert(JSON.stringify(this.vacancyForm.value));


  }
}
