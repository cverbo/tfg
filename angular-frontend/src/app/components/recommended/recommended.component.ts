import { Component, OnInit } from '@angular/core';
import { RecommendedService } from '../../services/recommended.service';
import { Show } from '../../models/show';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html'
})
export class RecommendedComponent implements OnInit {

  show: Show;
  shows: Show[];
  user: User;

  constructor( private recommendedService: RecommendedService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user.id);
    this.getShows();
  }

  getShows() {
    this.recommendedService.getShows(this.user.id)
      .then(shows => {
        this.shows = shows;
        this.show = this.shows[0];
        this.shows = this.shows.slice(1, this.shows.length);
      }
      );
  }

}
