import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  private baseUrl = '';

  constructor(private http: Http) { }

  getUser(id: string):  Promise<User> {
    return this.http.get(this.baseUrl + '/api/users/' + id)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  createUser(userData: User): Promise<User> {
    return this.http.post(this.baseUrl + '/api/users/', userData)
      .toPromise().then(response => response.json() as User)
      .catch(this.handleError);
  }

  updateUser(userData: User): Promise<User> {
    return this.http.put(this.baseUrl + '/api/users/' + userData.id, userData)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  deleteUser(id: string): Promise<any> {
    return this.http.delete(this.baseUrl + '/api/users/' + id)
      .toPromise()
      .catch(this.handleError);
  }

  newUser(profile: any): User {
    let newUser = new User();

    if (profile.sub.split('|')[0] === 'google-oauth2') {
      newUser.email = profile.nickname + '@gmail.com';
    } else {
      newUser.email = profile.name;
    }

    newUser.id = profile.sub;
    newUser.userName = profile.nickname;

    this.createUser(newUser);

    return newUser;
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
