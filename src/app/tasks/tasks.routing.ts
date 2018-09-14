import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { AddTasksComponent } from '../add-tasks/add-tasks.component';
import { ProjectsResolve } from '../projects/projects.resolve';
import { TasksResolve } from './tasks.resolve';
import { UsersResolve } from '../users/users.resolve';
import { CompaniesResolve } from '../companies/companies.resolve';

const routes: Routes = [
    {
        path: '', 
        component: TasksComponent,
        data: {title: 'Tasks', access: ['admin']},
        children: [
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
          users: UsersResolve,
          tasks: TasksResolve
        }
      }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
  })
  export class TasksRoutingModule { }