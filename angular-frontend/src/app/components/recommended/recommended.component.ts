import { Component, OnInit } from '@angular/core';
import { RecommendedService } from '../../services/recommended.service';
import { Show } from '../../models/show';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Data } from '../../services/data.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html'
})
export class RecommendedComponent implements OnInit {

  show: Show;
  shows: Show[];
  user: User;

  constructor( private recommendedService: RecommendedService,
               private userService: UserService,
               private data: Data,
               private router: Router) { }

  ngOnInit() {
    this.user = this.data.user;
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
