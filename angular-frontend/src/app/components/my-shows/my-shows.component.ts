import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-shows',
  templateUrl: './my-shows.component.html'
})
export class MyShowsComponent implements OnInit {

  profile: any;

  user: User;

  constructor(private userService: UserService,
              private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        this.userService.getUser( this.profile.sub )
        .then(
          user => {
            this.user = user;
            localStorage.setItem('user', JSON.stringify(this.user));
          }
        ).catch(user => {
          this.user = this.userService.newUser(this.profile);
          localStorage.setItem('user', JSON.stringify(this.user));
        });
      });
    }
  }

}
