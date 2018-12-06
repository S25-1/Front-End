import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AcceptedUser } from './vacancyresponses.ListItem';
import { environment } from '../../environments/environment';

@Injectable()
export class VacancyresponseService {
  constructor(private http: HttpClient) {}

  getAcceptedUser(): Observable<AcceptedUser[]> {
    return this.http.get<AcceptedUser[]>(`${environment.apiUri}/vacancy/responses`);
  }
}
