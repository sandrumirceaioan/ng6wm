import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyResolve } from './company.resolve';
import { CompanyRoutingModule } from './company.routing';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsResolve } from '../projects/projects.resolve';
import { ListsFilterModule } from '../shared/modules/search.module';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ListsFilterModule
  ],
  declarations: [CompanyComponent],
  providers: [CompanyResolve, ProjectsResolve]
})
export class CompanyModule { }
