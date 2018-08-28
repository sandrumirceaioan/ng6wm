import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { Task } from '../task/task.model';
import { TasksService } from '../shared/services/tasks/tasks.service';

@Injectable()
export class TasksResolve implements Resolve<Task[]>{

  constructor(
    private tasksService: TasksService, 
    private router: Router,
    private toastr: ToastrService
  ){ }

  resolve(route: ActivatedRouteSnapshot){ 
    return this.tasksService.getAllPaginated(true).pipe(
      catchError((error) => {
        this.toastr.error(error.error.message);
        this.router.navigate(['/dashboard']);
        return of(null);
      })
    )
  }

}