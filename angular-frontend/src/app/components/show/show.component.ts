import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from '../../models/show';
import { ShowService } from '../../services/show.service';
import * as envvars from '../../globals';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html'
})
export class ShowComponent  implements OnInit {

  user: User;
  show: Show;
  imgPath = envvars.imgPath;
  defaultImgPath = envvars.defaultImgPath;
  favoriteImgPath = envvars.favoriteImgPath;

  constructor( private activatedRoute: ActivatedRoute,
               private showService: ShowService,
               private userService: UserService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));

    this.activatedRoute.params.subscribe( params => {
      this.showService.getShow( this.user.id, params['id'] )
      .then(show => this.show = show);
    });
  }

  followShow(show: Show) {
    this.user = this.showService.followShow(show, this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  unfollowShow() {
    this.show.followed = false;
    this.show.favorite = false;
    let followedShows = this.user.followedShows;
    for (let i = 0; i < followedShows.length; i++) {
      let followedShow = followedShows[i];
      if (followedShow.id === this.show.id) {
        followedShows.splice(i, 1);
      }
    }
    this.user.followedShows = followedShows;
    this.userService.updateUser(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  favoriteShow(favorite: boolean) {
    this.show.favorite = favorite;
    let followedShows = this.user.followedShows;
    let followedShowsUpdated: Show[] = [];
    for (let i = 0; i < followedShows.length; i++) {
      let followedShow = followedShows[i];
      if (followedShow.id === this.show.id) {
        followedShow.favorite = favorite;
      }
      followedShowsUpdated.push(followedShow);
    }
    this.user.followedShows = followedShowsUpdated;
    this.userService.updateUser(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
  }

}
