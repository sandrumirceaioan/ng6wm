import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { of } from 'rxjs';
import { ProjectsService } from '../shared/services/projects/projects.service';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProjectsResolve implements Resolve<any>{

  constructor(
    private projectsService: ProjectsService, 
    private router: Router,
    private toastr: ToastrService
  ){ }

  resolve(route: ActivatedRouteSnapshot){ 
    return this.projectsService.getAll(true).pipe(
      catchError((error) => {
        console.log(error);
        this.toastr.error(error.error.message);
        this.router.navigate(['/dashboard']);
        return of(null);
      })
    )
  }

}