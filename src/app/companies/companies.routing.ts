import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies.component';
import { AddCompaniesComponent } from '../add-companies/add-companies.component';
import { CompaniesResolve } from './companies.resolve';

const routes: Routes = [
  {
    path: '', 
    component: CompaniesComponent,
    data: {title: 'Companies', access: ['admin']},
    children: [
      { path: 'add', component: AddCompaniesComponent },
      { path: ':id', loadChildren: '../company/company.module#CompanyModule' }
    ],
    resolve: {
      companies: CompaniesResolve
    },
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class CompaniesRoutingModule { }