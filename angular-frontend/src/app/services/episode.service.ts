import { Injectable } from '@angular/core';
import { Episode } from '../models/episode';
import { Http } from '@angular/http';
import * as envvars from '../globals';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class EpisodeService {

    private baseUrl = envvars.baseUrl;

    constructor( private http: Http,
                 private userService: UserService ) { }

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

    public markEpisodeAsWatched(episode: Episode, user: User): User {
        let weList: Episode[] = [];

        if (user.watchedEpisodes != null) {
            weList = user.watchedEpisodes;
        }
        weList.push(episode);
        user.watchedEpisodes = weList;
        this.userService.updateUser(user);
        return user;
    }

    public markEpisodeAsUnwatched(episode: Episode, user: User): User {
        let weList: Episode[] = [];

        if (user.watchedEpisodes != null) {
            weList = user.watchedEpisodes;
        }

        let index = 0;
        let found = false;
        let i = 0;
        while ( i < weList.length && !found) {
            if (episode.showId === weList[i].showId && episode.episodeId === weList[i].episodeId) {
                index = i;
                found = true;
            }
            i++;
        }
        if (found) {
            weList.splice(index, 1);
            user.watchedEpisodes = weList;
            this.userService.updateUser(user);
        }

        return user;

    }

    private handleError(error: any): Promise<any> {
      console.error('Some error occured', error);
      return Promise.reject(error.message || error);
    }

}
