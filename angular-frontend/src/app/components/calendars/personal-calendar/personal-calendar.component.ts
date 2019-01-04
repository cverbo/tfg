import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../../services/calendar.service';
import { EpisodeService } from '../../../services/episode.service';
import { Router } from '@angular/router';
import * as envvars from '../../../globals';
import { User } from '../../../models/user';
import { ShowCalendar } from '../../../models/showCalendar';
import { NextEpisode } from '../../../models/nextEpisode';
import { Episode } from '../../../models/episode';

@Component({
  selector: 'app-personal-calendar',
  templateUrl: './personal-calendar.component.html'
})
export class PersonalCalendarComponent implements OnInit {

  user: User;
  showCalendars: ShowCalendar[];
  imgPath = envvars.imgPath;
  defaultImgPath = envvars.defaultImgPath;
  favoriteImgPath = envvars.favoriteImgPath;

  constructor( private calendarService: CalendarService,
               private episodeService: EpisodeService,
               private router: Router ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getPersonalCalendar();
  }

  getPersonalCalendar() {
    this.calendarService.getPersonalCalendar(this.user.id)
      .then(showCalendars => this.showCalendars = showCalendars );
  }

  getEpisodeText(nextEpisode: NextEpisode): string {

    let episodeText = nextEpisode.show.name;
    episodeText = episodeText + ' - ' + this.fillWithLeftZeros(nextEpisode.episode.seasonNumber, 2);
    episodeText = episodeText + 'x' + this.fillWithLeftZeros(nextEpisode.episode.episodeNumber, 2) ;
    episodeText = episodeText + ' - ' + nextEpisode.episode.name;

    return episodeText;
  }

  showShow(showId: number) {
    this.router.navigate( ['/show', showId]);
  }

  markEpisodeAsWatched(episode: Episode) {
    episode.watched = true;
    this.user = this.episodeService.markEpisodeAsWatched(episode, this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  fillWithLeftZeros( numberIn: number, lengthIn: number ) {

    let stringOut = '' + numberIn;
    while (stringOut.length < lengthIn) {
      stringOut = '0' + stringOut;
    }

    return stringOut;

  }

}
