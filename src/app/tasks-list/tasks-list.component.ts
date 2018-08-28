import { Component, OnInit } from '@angular/core';
import { TasksService } from '../shared/services/tasks/tasks.service';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks: Task[];
  count: number;

  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit() {
    this.tasks = this.tasksService.tasks;
    this.count = this.tasksService.count;
  }

}
