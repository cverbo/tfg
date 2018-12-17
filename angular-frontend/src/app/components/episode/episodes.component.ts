import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from '../../models/episode';
import { EpisodeService } from '../../services/episode.service';
import { Router } from '@angular/router';
import * as envvars from '../../globals';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html'
})
export class EpisodesComponent implements OnInit {

  showId = '44217';
  seasonNumber = 1;
  episodes: Episode[];

  constructor( private _episodesService: EpisodeService,
               private router: Router) { }

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes() {
    this._episodesService.getEpisodes(this.showId, this.seasonNumber)
      .then(episodes => this.episodes = episodes );
  }

}
