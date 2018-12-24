import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Data } from '../../../services/data.service';
import { User } from '../../../models/user';
import { ActivatedRoute } from '@angular/router';
import { ShowService } from '../../../services/show.service';
import { Show } from '../../../models/show';

@Component({
  selector: 'app-show-search.component',
  templateUrl: './show-search.component.html'
})
export class ShowSearchComponent implements OnInit {

  user: User;
  text: string;
  shows: Show[];

  constructor ( private userService: UserService,
                private data: Data,
                private activatedRoute: ActivatedRoute,
                private showService: ShowService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.showService.searchShow( params['text'] )
      .then(shows => {
        this.shows = shows;
        this.text = params['text'];
      });
    });

    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
