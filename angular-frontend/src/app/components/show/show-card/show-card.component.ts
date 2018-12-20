import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Show } from '../../../models/show';
import * as envvars from '../../../globals';
import { ShowService } from '../../../services/show.service';
import { User } from '../../../models/user';
import { Data } from '../../../services/data.service';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html'
})
export class ShowCardComponent implements OnInit {

  @Input() showId: number;
  @Input() origin: string;
  @Output() showSelected: EventEmitter<number>;
  imgPath = envvars.imgPath;
  user: User;
  show: Show;
  followed = false;

  constructor( private router: Router,
               private showService: ShowService,
               private data: Data) {
    this.showSelected = new EventEmitter();
  }

  ngOnInit(): void {
    this.getShow();
    this.user = this.data.user;
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
    this.data.user = this.user;
  }

}
