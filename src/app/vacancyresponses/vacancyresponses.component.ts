import { Component, OnInit } from '@angular/core';
import { VacancyresponseService } from './vacancyresponses.service';

@Component({
  selector: 'app-vacancyresponses',
  templateUrl: './vacancyresponses.component.html',
  styleUrls: ['./vacancyresponses.component.scss'],
})
export class VacancyresponsesComponent implements OnInit {

  public acceptedusers = [];
  constructor(private vacancyresponseService: VacancyresponseService) {}

  ngOnInit() {
    this.vacancyresponseService.getAcceptedUser()
      .subscribe(data => this.acceptedusers = data);
  }

  private mergeDates(dateValue: Date): string {
    const returnValue = dateValue.toISOString()
    .replace(/[TZ]/g, ' ');                // Replace T an Z with spaces to make it MySQL parsable
    return returnValue;
  }



}
