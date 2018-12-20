import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from '../../models/show';
import { ShowService } from '../../services/show.service';
import * as envvars from '../../globals';
import { User } from 'src/app/models/user';
import { Data } from '../../services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html'
})
export class ShowComponent  implements OnInit {

  user: User;
  show: Show;
  imgPath = envvars.imgPath;
  unfollowed = false;

  constructor( private activatedRoute: ActivatedRoute,
               private showService: ShowService,
               private userService: UserService,
               private data: Data) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.showService.getShow( params['id'] )
      .then(show => this.show = show);
    });

    this.user = this.data.user;
  }

  unfollowShow() {
    let followedShows = this.user.followedShows;
    for (let i = 0; i < followedShows.length; i++) {
      let followedShow = followedShows[i];
      console.log('followedShow.showId: ' + followedShow.showId);
      console.log('this.showId: ' + this.show.id);
      if (followedShow.showId === this.show.id) {
        followedShows.splice(i, 1);
      }
    }
    this.user.followedShows = followedShows;
    this.userService.updateUser(this.user);
    this.data.user = this.user;
    this.unfollowed = true;
  }

}
