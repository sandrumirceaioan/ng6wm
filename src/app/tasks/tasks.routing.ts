import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { AddTasksComponent } from '../add-tasks/add-tasks.component';
import { ProjectsResolve } from '../projects/projects.resolve';

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
        pathMatch: 'prefix'
      }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
  })
  export class TasksRoutingModule { }