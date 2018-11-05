import { Component, OnInit } from '@angular/core';
import { Vacancy, JobType } from './vacancy';

@Component({
  selector: 'app-add-vacancy',
  templateUrl: './add-vacancy.component.html',
  styleUrls: ['./add-vacancy.component.scss'],
})
export class AddVacancyComponent implements OnInit {

  newVacancy: Vacancy = new Vacancy();
  jobTypeItems = this.newVacancy.getJobTypes();
  skillItems = this.newVacancy.getSkills();

  // Set limit for date picker
  minDate = new Date();

  name: string;

  beginDate: string;
  beginTime: string;
  endTime: string;

  minimalExperience: string;

  jobType: string;

  ngOnInit() {
  }
}
