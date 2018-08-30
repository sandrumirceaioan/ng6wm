import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { User } from './user.model';
import { UsersService } from '../shared/services/users/users.service';

@Injectable()
export class UsersResolve implements Resolve<User[]>{

  constructor(
    private tasksService: UsersService, 
    private router: Router,
    private toastr: ToastrService
  ){ }

  resolve(route: ActivatedRouteSnapshot){ 
    return this.tasksService.all().pipe(
      catchError((error) => {
        this.toastr.error(error.error.message);
        this.router.navigate(['/dashboard']);
        return of(null);
      })
    )
  }

}