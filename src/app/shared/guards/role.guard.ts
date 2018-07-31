import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../services/users/users.service';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(
                private toastr: ToastrService,
                private router: Router,
                private usersService: UsersService,
            ) {}

            canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> {

                // get access property from route and user role
                let access = next.data.access;
                let user = this.usersService.logged.userType;

                // allow user if role found in route
                if (access.includes(user)) return of(true);

                // deny user if role not found in route
                this.toastr.error('Not allowed!');
                this.router.navigate(['/dashboard']);
                return of(false);
            }
}