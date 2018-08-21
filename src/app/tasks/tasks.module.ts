import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks.routing';
import { AddTasksComponent } from '../add-tasks/add-tasks.component';
import { ListsFilterModule } from '../shared/modules/search.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    ListsFilterModule,
    FontAwesomeModule,
    FormsModule
  ],
  declarations: [TasksComponent, AddTasksComponent]
})
export class TasksModule { }
