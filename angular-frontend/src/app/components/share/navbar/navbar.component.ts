import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  searchShow( text: string) {
    this.router.navigate( ['/show-search', text] );
  }

}
