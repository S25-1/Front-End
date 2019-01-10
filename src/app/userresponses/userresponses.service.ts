import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AcceptedUser } from './userresponses.ListItem';
import { environment } from '../../environments/environment';

@Injectable()
export class UserresponsesService {
  userrole = localStorage.getItem('role');
  userid = localStorage.getItem('user_id');

  constructor(private http: HttpClient) {}

  getAcceptedUser(): Observable<AcceptedUser[]> {
    return this.http.get<AcceptedUser[]>(
      `${environment.apiUri}/vacancy/responses/${this.userrole}/${this.userid}`,
      );
  }
}
