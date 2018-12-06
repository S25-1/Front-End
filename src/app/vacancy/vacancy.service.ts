import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vacancy } from './vacancyListItem';
import { environment } from '../../environments/environment';

@Injectable()
export class VacancyService {
  constructor(private http: HttpClient) {}

  getVacancy(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${environment.apiUri}/vacancy`);
  }
}
