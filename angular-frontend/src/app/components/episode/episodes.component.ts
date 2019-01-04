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
    this.user = JSON.parse(localStorage.getItem('user'));

    this.activatedRoute.params.subscribe( params => {
      this.episodesService.getEpisodesAllSeasons( this.user.id, params['id'] )
      .then(episodes => this.episodes = episodes);
      this.showService.getShow( this.user.id, params['id'] )
      .then(show => this.show = show);
    });
  }

  markEpisodeAsWatchedOrUnwatched(episode: Episode): void {
    if (!episode.watched) {
      this.user = this.episodesService.markEpisodeAsWatched(episode, this.user);
      localStorage.setItem('user', JSON.stringify(this.user));
      episode.watched = true;
    } else {
      this.user = this.episodesService.markEpisodeAsUnwatched(episode, this.user);
      localStorage.setItem('user', JSON.stringify(this.user));
      episode.watched = false;
    }
  }

}
