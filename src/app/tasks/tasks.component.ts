import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faChevronRight, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../shared/services/users/users.service';
import { User } from '../users/user.model';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../shared/services/tasks/tasks.service';
import { Task } from '../task/task.model';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'underscore';

library.add(faPlus, faChevronRight, faBuilding);

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  users: User[];
  tasks: Task[];
  pages: number[];
  skip: number;
  current: number;
  searchTerm: string;

  constructor(
    private usersService: UsersService,
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.tasks = this.route.snapshot.data['tasks'];
    this.users = this.route.snapshot.data['users'];
    this.current = 1;
    this.tasks = this.tasksService.tasks;
    this.pages = _.range(1, Math.ceil(this.tasksService.count / 15) + 1);
    this.skip = this.tasksService.skip;

  }

  navigate(page) {
    this.tasksService.filters.page = page;
    this.tasksService.getAllPaginated().subscribe(
      (result) => {
        this.current = page;
        this.tasks = result;
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }

  onSearchChange(search) {
    this.tasksService.filters.search = search;
    this.tasksService.filters.page = 1;
    this.tasksService.getAllPaginated().subscribe(
      (result) => {
        this.current = 1;
        this.tasks = result;
        this.pages = _.range(1, Math.ceil(this.tasksService.count / 15) + 1);
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }

  onSelectUser(user){
    this.tasksService.filters.user = user;
    this.tasksService.getAllPaginated().subscribe(
      (result) => {
        this.current = 1;
        this.tasks = result;
        this.pages = _.range(1, Math.ceil(this.tasksService.count / 15) + 1);
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }

}
