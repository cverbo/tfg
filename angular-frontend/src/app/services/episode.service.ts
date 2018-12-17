import { Injectable } from '@angular/core';
import { Episode } from '../models/episode';
import { Http } from '@angular/http';
import * as envvars from '../globals';

@Injectable()
export class EpisodeService {
    constructor( private http: Http ) { }

    private baseUrl = envvars.baseUrl;

    public getEpisodes( showId: string, seasonNumber: number ): Promise<Episode[]> {
        return this.http.get(this.baseUrl + '/api/show/' + showId + '/season/' + seasonNumber + '/')
            .toPromise()
            .then(response => response.json() as Episode[])
              .catch(this.handleError);

    }

    public getEpisode( showId: string, seasonNumber: number, episodeNumber: number): Promise<Episode> {
        return this.http.get(this.baseUrl + '/api/show/' + showId + '/season/' + seasonNumber + '/episode/' + episodeNumber + '/')
            .toPromise()
            .then(response => response.json() as Episode)
              .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
      console.error('Some error occured', error);
      return Promise.reject(error.message || error);
    }

}
