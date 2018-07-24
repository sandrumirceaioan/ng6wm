import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users/users.service';
import { Router } from '../../../node_modules/@angular/router';
import { User } from '../users/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.user = this.usersService.logged;
  }

  logout(){
    localStorage.removeItem('wmtoken');
    this.usersService.logged = null;
    this.router.navigate(['login']);
  }

}
