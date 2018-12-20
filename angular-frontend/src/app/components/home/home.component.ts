import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Data } from '../../services/data.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  user: User;

  constructor(private userService: UserService,
              private data: Data) { }

  ngOnInit() {
    this.userService.getUser( '5c14f902608b892548c1bfa0' )
      .then(user => this.user = user);
  }

  ngOnDestroy() {
    this.data.user = this.user;
  }

}
