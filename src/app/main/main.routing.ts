import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard'},
      { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule'},
      { path: 'manage', loadChildren: '../manage/manage.module#ManageModule'}
    ],
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class MainRoutingModule { }