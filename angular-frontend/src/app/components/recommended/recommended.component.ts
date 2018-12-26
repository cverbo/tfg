import { Component, OnInit } from '@angular/core';
import { Show } from '../../models/show';
import { User } from 'src/app/models/user';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html'
})
export class RecommendedComponent implements OnInit {

  show: Show;
  shows: Show[];
  user: User;

  constructor( private showService: ShowService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user.id);
    this.getRecommendedShows();
  }

  getRecommendedShows() {
    this.showService.getRecommendedShows(this.user.id)
      .then(shows => {
        this.shows = shows;
        if (this.user.followedShows != null) {
          this.show = this.shows[0];
          this.shows = this.shows.slice(1, this.shows.length);
        } else {
          this.show = null;
        }
      }
      );
  }

}
