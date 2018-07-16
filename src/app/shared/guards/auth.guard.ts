import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../services/users/users.service';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
                private usersService: UsersService,
                private router: Router
            ) {}

            canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {

                // check if user is logged in
                return this.usersService.checkLogged().pipe(
                    map(user => {
                        console.log('Logged: ', user);
                        return user;
                    }),
                    catchError(error => {
                        console.log(error.error.message);
                        this.router.navigate(['/login']);
                        return of(false);
                    })
                );

            }
}