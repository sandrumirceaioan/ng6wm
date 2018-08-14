import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project.routing';
import { ProjectResolve } from './project.resolve';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  declarations: [ProjectComponent],
  providers: [ProjectResolve]
})
export class ProjectModule { }
