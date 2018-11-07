import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vacancy } from './vacancyListItem';

export interface Test {
}

@Injectable()
export class VacancyService {
  private url: string = 'https://cgi-group1.azurewebsites.net/api/Vacancy?command=getVacancyList';
  constructor(private http: HttpClient) {}

  getVacancy(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.url);
  }
}
