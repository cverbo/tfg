import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Show } from '../../../models/show';
import * as envvars from '../../../globals';
import { ShowService } from '../../../services/show.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html'
})
export class ShowCardComponent implements OnInit {

  @Input() showId: number;
  @Input() origin: string;
  imgPath = envvars.imgPath;
  defaultImgPath = envvars.defaultImgPath;
  user: User;
  show: Show;
  followed = false;

  constructor( private router: Router,
               private showService: ShowService) { }

  ngOnInit(): void {
    this.getShow();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  getShow() {
    this.showService.getShow( this.showId )
    .then(show => this.show = show);
  }

  showShow() {
    this.router.navigate( ['/show', this.showId]);
  }

  followShow() {
    this.showService.followShow(this.show, this.user);
    this.followed = true;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

}
