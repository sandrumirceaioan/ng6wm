import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faChevronRight, faBuilding, faFilter } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../shared/services/users/users.service';
import { User } from '../users/user.model';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../shared/services/companies/companies.service';
import { ProjectsService } from '../shared/services/projects/projects.service';
import { TasksService } from '../shared/services/tasks/tasks.service';
import { Company } from '../company/company.model';
import { Project } from '../project/project.model';
import { Task } from '../task/task.model';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'underscore';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

library.add(faPlus, faChevronRight, faBuilding, faFilter);

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  users: User[];
  tasks: Task[];
  companies: Company[];
  projects: Project[];
  pages: number[];
  skip: number;
  current: number;
  filters: boolean = false;
  searchTextChanged = new Subject<string>();

  constructor(
    private usersService: UsersService,
    private companiesService: CompaniesService,
    private projectsService: ProjectsService,
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
    this.searchTextChanged.pipe(debounceTime(700)).subscribe((term) => {
      this.tasksService.filters.search = term;
      this.search();
    });
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
    this.searchTextChanged.next(search || '');
  }

  search() {
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

  onSelectUser(user) {
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

  toggleFilters() {
    this.filters = !this.filters;
    this.companiesService.all().subscribe(
      (result) => {this.companies = result;}
    );
    this.projectsService.all().subscribe(
      (result) => {this.projects = result;}
    );
  }

}
