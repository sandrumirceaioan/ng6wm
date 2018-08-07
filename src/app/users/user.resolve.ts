import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UsersService } from '../shared/services/users/users.service';

@Injectable()
export class UserResolve implements Resolve<any>{

  constructor(
    private usersService: UsersService  
  ){ }

  resolve(){
    return this.usersService.logged;
  }

}