import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', loadChildren:'./main/main.module#MainModule'},
  { path: 'login', component: LoginComponent, data: {title: 'Login'}}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:false})],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }