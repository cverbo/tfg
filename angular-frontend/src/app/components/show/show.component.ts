import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from '../../models/show';
import { ShowService } from '../../services/show.service';
import * as envvars from '../../globals';
import { User } from 'src/app/models/user';
import { Data } from '../../services/data.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html'
})
export class ShowComponent  implements OnInit {

  user: User;
  show: Show;
  imgPath = envvars.imgPath;

  constructor( private activatedRoute: ActivatedRoute,
               private _showService: ShowService,
               private data: Data) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this._showService.getShow( params['id'] )
      .then(show => this.show = show);
    });

    this.user = this.data.user;
  }

}
