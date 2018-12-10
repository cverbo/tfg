import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from '../../models/show';
import { ShowService } from '../../services/show.service';
import * as envvars from '../../globals';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html'
})
export class ShowComponent  implements OnInit {

  show: Show;
  loaded: Promise<boolean>;
  imgPath = envvars.imgPath;

  constructor( private activatedRoute: ActivatedRoute,
               private _showService: ShowService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this._showService.getShow( params['id'] )
      .then(show => this.show = show);

      this.loaded = Promise.resolve(true);
    });

  }

}
