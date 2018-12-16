import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUser( '5c14f902608b892548c1bfa0' )
      .then(user => this.user = user);
  }

}
