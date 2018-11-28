import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

  private jwtHelper = new JwtHelperService();

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUri}/account/login`, { email, password })
      .subscribe((data) => {
        // Set session vars
        this.setSession(data.token);

        // Log vars
        // console.log(this.jwtHelper.decodeToken(data.token));
      });
  }

  register(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUri}/account/register`, { email, password })
      .subscribe((data) => {
        // Set session vars
        this.setSession(this.jwtHelper.decodeToken(data.token));
      });
  }

  private setSession(token) {
    const expiresAt = moment().add(this.jwtHelper.decodeToken(token).expiresIn, 'second');

    localStorage.setItem('id_token', token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
