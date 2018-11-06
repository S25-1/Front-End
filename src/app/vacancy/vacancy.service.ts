import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vacancy } from './vacancyListItem';

@Injectable()
export class VacancyService {
  constructor(private http: HttpClient) {}

  getVacancy(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>('http://localhost:50382/api/Vacancy?command=getVacancyList');
  }
}
