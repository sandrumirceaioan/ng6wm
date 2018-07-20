import { Component, OnInit } from '@angular/core';
import { User } from '../users/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {};
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() { 
    console.log(this.user);
  }

  get diagnostic() { return JSON.stringify(this.user); }

}
