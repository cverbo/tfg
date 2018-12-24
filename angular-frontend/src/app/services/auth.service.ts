import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  public userProfile: any;

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;

  auth0 = new auth0.WebAuth({
    clientID: 'bJpmSt9Z8Sq1Ykav2JbLQwUPQ4uY93Pn',
    domain: 'verbo-carlos.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri : 'http://localhost:4200/#/home',
    scope: 'openid profile'
  });

  constructor(public router: Router,
              private http: Http) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/my-shows']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    // Set the time that the access token will expire at
    const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
    this._expiresAt = expiresAt;
  }

  public renewSession(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time
    this._accessToken = '';
    this._idToken = '';
    this._expiresAt = 0;
    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');
    // Go back to the home route
    window.location.href = 'https://verbo-carlos.eu.auth0.com/v2/logout?returnTo=http://localhost:4200/';
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return new Date().getTime() < this._expiresAt;
  }

  public getProfile(cb): void {
    if (!this._accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(this._accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

}
