import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Show } from '../../../models/show';
import * as envvars from '../../../globals';


@Component({
  selector: 'app-recommended-card',
  templateUrl: './recommended-card.component.html'
})
export class RecommendedCardComponent implements OnInit {

  @Input() show: Show;
  @Output() showSelected: EventEmitter<number>;
  imgPath = envvars.imgPath;

  constructor( private router: Router ) {
    this.showSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  showShow() {
    this.router.navigate( ['/show', this.show.id] );
  }

}
