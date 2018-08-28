import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { AddTasksComponent } from '../add-tasks/add-tasks.component';
import { ProjectsResolve } from '../projects/projects.resolve';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { TasksResolve } from './tasks.resolve';

const routes: Routes = [
    {
        path: '', 
        component: TasksComponent,
        data: {title: 'Tasks', access: ['admin']},
        children: [
          {
            path: '',
            component: TasksListComponent
          },
          { 
            path: 'add',
            component: AddTasksComponent,
            resolve: {
              projects: ProjectsResolve
            }
         },
          { path: ':id', loadChildren: '../task/task.module#TaskModule' }
        ],
        pathMatch: 'prefix',
        resolve: {
          tasks: TasksResolve
        }
      }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
  })
  export class TasksRoutingModule { }