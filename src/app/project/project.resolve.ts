import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { of } from "rxjs";
import { catchError } from 'rxjs/operators';
import { ToastrService } from "../../../node_modules/ngx-toastr";
import { ProjectsService } from "../shared/services/projects/projects.service";

@Injectable()
export class ProjectResolve implements Resolve<any>{

    constructor(
        private projectsService: ProjectsService,
        private toastr: ToastrService,
        private router: Router    
      ){ }

    resolve(route: ActivatedRouteSnapshot){
        return this.projectsService.getOneById(route.params).pipe(
            catchError((error) => {
                this.toastr.error(error.error.message);
                this.router.navigate(['/manage/projects']);
                return of(null);
            })
        )
    }

}