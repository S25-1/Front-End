import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vacancy } from './vacancyListItem';
import { Observable } from 'rxjs';

export interface Test {
}

@Injectable()
export class VacancyService {

  constructor(private http: HttpClient) {}

  private _url: string = "http://localhost:50382/api/Vacancy?command=getVacancyList";

  getVacancy() : Observable<Vacancy[]>{
        return this.http.get<Vacancy[]>(this._url);
      }
}
