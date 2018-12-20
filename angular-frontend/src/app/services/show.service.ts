import { Injectable } from '@angular/core';
import { Show } from '../models/show';
import { Http } from '@angular/http';
import * as envvars from '../globals';
import { User } from '../models/user';
import { FollowedShow } from '../models/followedShow';
import { UserService } from './user.service';

@Injectable()
export class ShowService {
    constructor( private http: Http,
        private userService: UserService ) { }

    private baseUrl = envvars.baseUrl;

    public getShow(id: number): Promise<Show> {
        return this.http.get(this.baseUrl + '/api/show/' + id)
            .toPromise()
            .then(response => response.json() as Show)
              .catch(this.handleError);

    }

    public followShow(show: Show, user: User): void {
        let followedShows: FollowedShow[] = [];
        if (user.followedShows != null) {
            followedShows = user.followedShows;
        }
        let fs = new FollowedShow();
        fs.showId = show.id;
        fs.showName = show.name;
        fs.showImgUrl = show.poster_path;
        fs.isFavorite = false;
        followedShows.push(fs);
        user.followedShows = followedShows;
        this.userService.updateUser(user);
    }

    public searchShow(text: string): Promise<Show[]> {
        return this.http.get(this.baseUrl + '/api/show/search/' + text)
            .toPromise()
            .then(response => response.json() as Show[])
              .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
      console.error('Some error occured', error);
      return Promise.reject(error.message || error);
    }

}
