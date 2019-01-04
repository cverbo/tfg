import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Show } from '../../../models/show';
import * as envvars from '../../../globals';
import { User } from '../../../models/user';
import { ShowService } from '../../../services/show.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html'
})
export class ShowListComponent implements OnInit {

  @Input() shows: Show[];
  @Input() origin: string;
  imgPath = envvars.imgPath;
  defaultImgPath = envvars.defaultImgPath;
  favoriteImgPath = envvars.favoriteImgPath;
  user: User;

  constructor( private router: Router,
               private showService: ShowService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  showShow(showId: number) {
    this.router.navigate( ['/show', showId]);
  }

  followShow(show: Show) {
    this.user = this.showService.followShow(show, this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
  }

}
