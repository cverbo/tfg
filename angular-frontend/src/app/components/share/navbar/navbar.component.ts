import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor( private router: Router,
               private auth: AuthService ) {
    auth.handleAuthentication();
  }

  getAuth() {
    return this.auth;
  }

  searchShow( text: string) {
    this.router.navigate( ['/show-search', text] );
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
