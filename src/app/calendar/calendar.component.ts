import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CalendarVacancy } from './vacancy';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  constructor(private http: HttpClient) { }

  vacancies: CalendarVacancy[];

  ngOnInit() {
    this.getAcceptedVacancies().subscribe(data => this.vacancies = data);
  }

  getAcceptedVacancies(): Observable<CalendarVacancy[]> {
    // Request data and return as observable
    return this.http.get<CalendarVacancy[]>(
      `${environment.apiUri}/vacancy/responses/${localStorage.getItem('user_id')}/2`,
      // `${environment.apiUri}/vacancy/responses/${localStorage.getItem('user_id')}/2`,
      ).pipe();
  }

  logVac() {
    console.log(this.vacancies);
  }
}
