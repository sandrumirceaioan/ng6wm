import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';
//import { ProjectResolve } from './project.resolve';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    // resolve: {
    //   project: ProjectResolve,
    // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }