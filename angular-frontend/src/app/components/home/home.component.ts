import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  profile: any;
  user: User;

  constructor( private auth: AuthService ) { }

  ngOnInit() {
    this.profile = this.auth.userProfile;
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
