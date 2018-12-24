import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from '../../models/episode';
import { EpisodeService } from '../../services/episode.service';
import { User } from 'src/app/models/user';
import { Show } from '../../models/show';
import { ShowService } from '../../services/show.service';
import * as envvars from '../../globals';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html'
})
export class EpisodesComponent implements OnInit {

  user: User;
  episodes: Episode[];
  show: Show;
  imgPath = envvars.imgPath;

  constructor( private episodesService: EpisodeService,
               private showService: ShowService,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.episodesService.getEpisodesAllSeasons( params['id'] )
      .then(episodes => this.episodes = episodes);
      this.showService.getShow( params['id'] )
      .then(show => this.show = show);
    });

    this.user = JSON.parse(localStorage.getItem('user'));
  }

  viewedEpisode(showId: number, seasonNumber: number, episodeNumber: number): boolean {
    let watched =  false;
    if (this.user.watchedEpisodes != null) {
      this.user.watchedEpisodes.forEach(watchedEpisode => {
        if (watchedEpisode.showId === showId && watchedEpisode.seasonNumber === seasonNumber && watchedEpisode.episodeNumber === episodeNumber) {
          watched = true;
        }
      });
    }
    return watched;
  }

  markEpisodeAsWatched(showId: number, seasonNumber: number, episodeNumber: number): void {
    let watched =  false;
    if (this.user.watchedEpisodes != null) {
      this.user.watchedEpisodes.forEach(watchedEpisode => {
        if (watchedEpisode.showId === showId && watchedEpisode.seasonNumber === seasonNumber && watchedEpisode.episodeNumber === episodeNumber) {
          watched = true;
        }
      });
    }
    if (!watched) {
      this.episodesService.markEpisodeAsWatched(showId, seasonNumber, episodeNumber, this.user);
      localStorage.setItem('user', JSON.stringify(this.user));
    }
  }

}
