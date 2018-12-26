import { Injectable } from '@angular/core';
import { Show } from '../models/show';
import { Http } from '@angular/http';
import * as envvars from '../globals';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class ShowService {
    constructor( private http: Http,
                 private userService: UserService ) { }

    private baseUrl = envvars.baseUrl;

    public getShow(userId: string, id: number): Promise<Show> {
        return this.http.get(this.baseUrl + '/api/show/' + id + '?user=' + encodeURI(userId))
            .toPromise()
            .then(response => response.json() as Show)
              .catch(this.handleError);
    }

    public followShow(show: Show, user: User): User {
        show.followed = true;
        let followedShows: Show[] = [];
        if (user.followedShows != null) {
            followedShows = user.followedShows;
        }
        followedShows.push(show);
        user.followedShows = followedShows;
        this.userService.updateUser(user);
        return user;
    }

    public searchShow(userId: string, text: string): Promise<Show[]> {
        return this.http.get(this.baseUrl + '/api/show/search/' + encodeURI(text) + '?user=' + encodeURI(userId))
            .toPromise()
            .then(response => response.json() as Show[])
              .catch(this.handleError);
    }

    public getRecommendedShows(userId: string): Promise<Show[]> {
        return this.http.get(this.baseUrl + '/api/recommended?user=' + encodeURI(userId))
            .toPromise()
            .then(response => response.json() as Show[])
              .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
      console.error('Some error occured', error);
      return Promise.reject(error.message || error);
    }

}
