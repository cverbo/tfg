import { Injectable } from '@angular/core';
import { Show } from '../models/show';
import { Http } from '@angular/http';
import * as envvars from '../globals';

@Injectable()
export class RecommendedService {
    constructor( private http: Http ) {
        console.log('Servicio listo para usar!!');
    }

    private baseUrl = envvars.baseUrl;

    private shows: Show[];

    public getShows(): Promise<Show[]> {
        return this.http.get(this.baseUrl + '/api/recommended/')
            .toPromise()
            .then(response => response.json() as Show[])
              .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
      console.error('Some error occured', error);
      return Promise.reject(error.message || error);
    }

}
