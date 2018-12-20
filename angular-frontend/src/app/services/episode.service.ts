import { Injectable } from '@angular/core';
import { Episode } from '../models/episode';
import { Http } from '@angular/http';
import * as envvars from '../globals';
import { User } from '../models/user';
import { WatchedEpisode } from '../models/watchedEpisode';
import { UserService } from './user.service';

@Injectable()
export class EpisodeService {
    constructor( private http: Http,
                 private userService: UserService ) { }

    private baseUrl = envvars.baseUrl;

    public getEpisodes(showId: string, seasonNumber: number ): Promise<Episode[]> {
        return this.http.get(this.baseUrl + '/api/show/' + showId + '/episodes/' + seasonNumber + '/')
            .toPromise()
            .then(response => response.json() as Episode[])
              .catch(this.handleError);

    }

    public getEpisodesAllSeasons(showId: string ): Promise<Episode[]> {
        return this.http.get(this.baseUrl + '/api/show/' + showId + '/episodes/')
            .toPromise()
            .then(response => response.json() as Episode[])
              .catch(this.handleError);

    }

    public getEpisode(showId: string, seasonNumber: number, episodeNumber: number): Promise<Episode> {
        return this.http.get(this.baseUrl + '/api/show/' + showId + '/season/' + seasonNumber + '/episode/' + episodeNumber + '/')
            .toPromise()
            .then(response => response.json() as Episode)
              .catch(this.handleError);

    }

    public markEpisodeAsWatched(showId: number, seasonNumber: number, episodeNumber: number, user: User): void {
        let we = new WatchedEpisode();
        let weList: WatchedEpisode[];
        we.showId = showId;
        we.seasonNumber = seasonNumber;
        we.episodeNumber = episodeNumber;

        if (user.watchedEpisodes != null) {
            weList = user.watchedEpisodes;
            weList.push(we);
        } else {
            weList = [we];
        }
        user.watchedEpisodes = weList;
        this.userService.updateUser(user);
    }


    private handleError(error: any): Promise<any> {
      console.error('Some error occured', error);
      return Promise.reject(error.message || error);
    }

}
