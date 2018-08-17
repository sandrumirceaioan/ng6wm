import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { of } from 'rxjs';
import { CompaniesService } from '../shared/services/companies/companies.service';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CompaniesResolve implements Resolve<any>{

  constructor(
    private companiesService: CompaniesService, 
    private router: Router,
    private toastr: ToastrService
  ){ }

  resolve(route: ActivatedRouteSnapshot){ 
    return this.companiesService.all().pipe(
      catchError((error) => {
        this.toastr.error(error.error.message);
        this.router.navigate(['/dashboard']);
        return of(null);
      })
    )
  }

}