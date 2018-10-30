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

  beginDate: number = Date.now();
  beginTime: string;

  endDate: string;
  endTime: string;

  jobType: string;
  ngOnInit() {
  }

}
