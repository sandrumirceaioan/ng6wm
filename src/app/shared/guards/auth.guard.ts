import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../services/users/users.service';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
                private toastr: ToastrService,
                private usersService: UsersService,
                private router: Router
            ) {}

            canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {

                // check if user is logged in
                return this.usersService.checkLogged().pipe(
                    map(user => {
                        console.log('AuthGuard: ', user);
                        if (user) return true;
                    }),
                    catchError(error => {
                        this.toastr.error(error.error.message);
                        this.router.navigate(['/login']);
                        return of(false);
                    })
                );

            }
}