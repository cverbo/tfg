import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as envvars from '../globals';
import { ShowCalendar } from '../models/showCalendar';

@Injectable()
export class CalendarService {

  private baseUrl = envvars.baseUrl;

  constructor( private http: Http ) { }

  public getPersonalCalendar(userId: string ): Promise<ShowCalendar[]> {
    return this.http.get(this.baseUrl + '/api/calendar/personal?user=' + encodeURI(userId))
        .toPromise()
        .then(response => response.json() as ShowCalendar[])
          .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }

}
