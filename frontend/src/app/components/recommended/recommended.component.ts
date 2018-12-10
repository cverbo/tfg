import { Component, OnInit } from '@angular/core';
import { RecommendedService } from '../../services/recommended.service';
import { Show } from '../../models/show';

import { Router } from '@angular/router';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html'
})
export class RecommendedComponent implements OnInit {

  shows: Show[];

  constructor( private _recommendedService: RecommendedService,
               private router: Router) { }

  ngOnInit() {
    this.getShows();
  }

  getShows() {
    this._recommendedService.getShows()
      .then(shows => this.shows = shows );
  }

}
