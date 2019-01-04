import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  user: User;
  profile: any;

  constructor( private auth: AuthService ) { }

  ngOnInit() {
    console.log(this.auth.userProfile);
    this.profile = this.auth.userProfile;
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
