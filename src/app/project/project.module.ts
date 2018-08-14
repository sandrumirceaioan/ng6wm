import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project.routing';
import { ProjectResolve } from './project.resolve';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagsModule } from '../tags/tags.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    FontAwesomeModule,
    TagsModule
  ],
  declarations: [ProjectComponent],
  providers: [ProjectResolve]
})
export class ProjectModule { }
