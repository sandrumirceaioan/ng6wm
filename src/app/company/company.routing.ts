import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyResolve } from './company.resolve';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    data: { title: 'Company', access: ['admin', 'manager', 'user'] },
    resolve: {
      projects: CompanyResolve,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }