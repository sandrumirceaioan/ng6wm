import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '', loadChildren:'./main/main.module#MainModule'},
  { path: 'login', component: LoginComponent, data: {title: 'Login'}},
  { path: '**', redirectTo: '404' },
  { path: '404', component: Page404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:false, preloadingStrategy: PreloadAllModules})],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }