import { Component, OnInit } from '@angular/core';
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

  constructor ( private activatedRoute: ActivatedRoute,
                private showService: ShowService ) { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('user'));

    this.activatedRoute.params.subscribe( params => {
      this.showService.searchShow(this.user.id, params['text'] )
      .then(shows => {
        this.shows = shows;
        this.text = params['text'];
      });
    });

  }

}
