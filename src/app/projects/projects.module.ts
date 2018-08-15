import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects.routing';
import { ProjectsService } from '../shared/services/projects/projects.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AddProjectsComponent } from '../add-projects/add-projects.component';
import { CompaniesModule } from '../companies/companies.module';
import { ListsFilterModule } from '../shared/modules/search.module';
import { ProjectsResolve } from './projects.resolve';
import { TagsModule } from '../tags/tags.module';
import { CompaniesResolve } from '../companies/companies.resolve';


@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FontAwesomeModule,
    FormsModule,
    CompaniesModule,
    ListsFilterModule,
    TagsModule
  ],
  declarations: [ProjectsComponent, AddProjectsComponent],
  providers: [ProjectsService, ProjectsResolve, CompaniesResolve]
})
export class ProjectsModule { }
