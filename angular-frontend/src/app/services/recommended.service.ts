import { Injectable } from '@angular/core';
import { Show } from '../models/show';
import { Http } from '@angular/http';
import * as envvars from '../globals';

@Injectable()
export class RecommendedService {
    constructor( private http: Http ) { }

    private baseUrl = envvars.baseUrl;

    public getShows(userId: string): Promise<Show[]> {
        return this.http.get(this.baseUrl + '/api/recommended/' + userId)
            .toPromise()
            .then(response => response.json() as Show[])
              .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
      console.error('Some error occured', error);
      return Promise.reject(error.message || error);
    }

}
