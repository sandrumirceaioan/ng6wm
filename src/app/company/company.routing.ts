import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyResolve } from './company.resolve';
import { ProjectsResolve } from '../projects/projects.resolve';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    resolve: {
      company: CompanyResolve,
      projects: ProjectsResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }