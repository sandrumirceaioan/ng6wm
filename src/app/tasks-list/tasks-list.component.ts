import { Component, OnInit } from '@angular/core';
import { TasksService } from '../shared/services/tasks/tasks.service';
import { Task } from '../task/task.model';
import * as _ from 'underscore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks: Task[];
  pages: number[];
  skip: number; 

  constructor(
    private tasksService: TasksService,
    private toastr: ToastrService
  ) { }

  ngOnInit() { 
    this.tasks = this.tasksService.tasks;
    this.pages = _.range(1, Math.ceil(this.tasksService.count / 10) + 1);
    this.skip = this.tasksService.skip;
  }

  navigate(page){
    this.tasksService.current = page;

    this.tasksService.getAllPaginated(page).subscribe(
      (result) => {
        this.tasks = this.tasksService.tasks;
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }

}
