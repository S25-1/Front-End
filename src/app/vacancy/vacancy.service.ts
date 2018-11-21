import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vacancy, Skill } from './vacancyListItem';
import { environment } from '../../environments/environment';

@Injectable()
export class VacancyService {
  // private url: string = 'https://localhost:44354/api/vacancy/getvacancylist';
  constructor(private http: HttpClient) {}

  getVacancy(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${environment.apiUri}/vacancy/getvacancylist`);
  }
}
