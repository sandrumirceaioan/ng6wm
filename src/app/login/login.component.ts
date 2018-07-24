import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../shared/services/users/users.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';
import { User } from '../users/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {};

  constructor(
    private router: Router,
    private usersService: UsersService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.usersService.loginUser(this.user).subscribe(
      (result: User)=>{
        this.toastr.success(`welcome, ${result.userName}`);
        this.router.navigate(['']);
      },
      (error)=>{
        this.toastr.error(error.error.message);
      }
    );
  }
  
}
