import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyResolve } from './company.resolve';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    resolve: {
      company: CompanyResolve,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }