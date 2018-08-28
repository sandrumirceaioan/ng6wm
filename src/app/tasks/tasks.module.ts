import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks.routing';
import { AddTasksComponent } from '../add-tasks/add-tasks.component';
import { ListsFilterModule } from '../shared/modules/search.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { ProjectsResolve } from '../projects/projects.resolve';
import { TasksService } from '../shared/services/tasks/tasks.service';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { TasksResolve } from './tasks.resolve';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    ListsFilterModule,
    FontAwesomeModule,
    FormsModule,
    NgxMyDatePickerModule.forRoot()
  ],
  declarations: [TasksComponent, AddTasksComponent, TasksListComponent],
  providers: [TasksService, ProjectsResolve, TasksResolve]
})
export class TasksModule { }
