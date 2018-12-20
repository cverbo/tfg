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

  @Input() user: User;
  @Input() showId: number;
  @Output() showSelected: EventEmitter<number>;
  imgPath = envvars.imgPath;
  show: Show;

  constructor( private router: Router,
               private _showService: ShowService) {
    this.showSelected = new EventEmitter();
  }

  ngOnInit(): void {
    this.getShow();
  }

  getShow() {
    this._showService.getShow( this.showId )
    .then(show => this.show = show);
  }

  showShow() {
    this.router.navigate( ['/show', this.showId]);
  }

}
