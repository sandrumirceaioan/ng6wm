import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { of } from "rxjs";
import { catchError } from 'rxjs/operators';
import { CompaniesService } from '../shared/services/companies/companies.service';
import { ToastrService } from "ngx-toastr";

@Injectable()
export class CompanyResolve implements Resolve<any>{

    constructor(
        private companiesService: CompaniesService,
        private toastr: ToastrService,
        private router: Router    
      ){ }

    resolve(route: ActivatedRouteSnapshot){
        return this.companiesService.getOneById(route.params).pipe(
            catchError((error) => {
                this.toastr.error(error.error.message);
                console.log('here');
                this.router.navigate(['/manage/companies']);
                return of(null);
            })
        )
    }

}