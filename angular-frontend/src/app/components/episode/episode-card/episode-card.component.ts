import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Episode } from '../../../models/episode';
import * as envvars from '../../../globals';
import { EpisodeService } from '../../../services/episode.service';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html'
})
export class EpisodeCardComponent implements OnInit {

  @Input() episodeNumber: number;
  showId = '44217';
  seasonNumber = 1;
  @Output() episodeSelected: EventEmitter<number>;
  imgPath = envvars.imgPath;
  episode: Episode;

  constructor( private router: Router,
               private _episodeService: EpisodeService) {
    this.episodeSelected = new EventEmitter();
  }

  ngOnInit(): void {
    this.getEpisode();
  }

  getEpisode() {
    this._episodeService.getEpisode( this.showId, this.seasonNumber, this.episodeNumber )
    .then(episode => this.episode = episode);
  }

  showEpisode() {
    this.router.navigate( ['/episode', this.episodeNumber] );
  }

}
