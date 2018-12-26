import { Injectable } from '@angular/core';
import { Episode } from '../models/episode';
import { Http } from '@angular/http';
import * as envvars from '../globals';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class EpisodeService {
    constructor( private http: Http,
                 private userService: UserService ) { }

    private baseUrl = envvars.baseUrl;

    public getEpisodes(userId: string, showId: string, seasonNumber: number ): Promise<Episode[]> {
        return this.http.get(this.baseUrl + '/api/show/' + showId + '/episodes/' + seasonNumber + '?user=' + encodeURI(userId))
            .toPromise()
            .then(response => response.json() as Episode[])
              .catch(this.handleError);
    }

    public getEpisodesAllSeasons(userId: string, showId: string ): Promise<Episode[]> {
        return this.http.get(this.baseUrl + '/api/show/' + showId + '/episodes?user=' + encodeURI(userId))
            .toPromise()
            .then(response => response.json() as Episode[])
              .catch(this.handleError);
    }

    public getEpisode(userId: string, showId: string, seasonNumber: number, episodeNumber: number): Promise<Episode> {
        return this.http.get(this.baseUrl + '/api/show/' + showId + '/season/' + seasonNumber + '/episode/' + episodeNumber + '?user=' + encodeURI(userId))
            .toPromise()
            .then(response => response.json() as Episode)
              .catch(this.handleError);
    }

    public markEpisodeAsWatched(episode: Episode, user: User): void {
        let weList: Episode[] = [];

        if (user.watchedEpisodes != null) {
            weList = user.watchedEpisodes;
        }
        weList.push(episode);
        user.watchedEpisodes = weList;
        this.userService.updateUser(user);
    }


    private handleError(error: any): Promise<any> {
      console.error('Some error occured', error);
      return Promise.reject(error.message || error);
    }

}
