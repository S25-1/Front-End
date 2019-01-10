import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AccountInfo } from './accountListItem';
import { environment } from '../../environments/environment';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccountInfo(userId: any): Observable<AccountInfo[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<AccountInfo[]>(`${environment.apiUri}/user?userid=2a139257-374a-404d-b1c2-429127b176d6`);
  }
}
// ${userId}
