import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage.component';
import { RoleGuard } from '../shared/guards/role.guard';

const routes: Routes = [
  {
    path: '', 
    component: ManageComponent,
    data: {title: 'Manage', access: ['admin','manager']},
    children: [
      { path: '', redirectTo: 'companies' },
      { path: 'companies', loadChildren: '../companies/companies.module#CompaniesModule'}
    ],
    canActivate: [RoleGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class ManageRoutingModule { }