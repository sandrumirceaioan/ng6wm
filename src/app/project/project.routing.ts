import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
 import { ProjectResolve } from './project.resolve';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    resolve: {
      project: ProjectResolve,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }