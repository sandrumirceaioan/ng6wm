import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks.routing';
import { AddTasksComponent } from '../add-tasks/add-tasks.component';
import { ListsFilterModule } from '../shared/modules/search.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { ProjectsResolve } from '../projects/projects.resolve';
import { TasksService } from '../shared/services/tasks/tasks.service';
import { TasksResolve } from './tasks.resolve';
import { UsersResolve } from '../users/users.resolve';
import { UserNameFilterModule } from '../shared/modules/username.module';
import { CompaniesResolve } from '../companies/companies.resolve';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    ListsFilterModule,
    UserNameFilterModule,
    FontAwesomeModule,
    FormsModule,
    NgxMyDatePickerModule.forRoot(),
    MyDateRangePickerModule
  ],
  declarations: [TasksComponent, AddTasksComponent],
  providers: [TasksService,  ProjectsResolve, CompaniesResolve, TasksResolve, UsersResolve]
})
export class TasksModule { }
