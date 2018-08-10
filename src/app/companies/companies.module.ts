import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { CompaniesRoutingModule } from './companies.routing';
import { AddCompaniesComponent } from '../add-companies/add-companies.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CompaniesResolve } from './companies.resolve';
import { ListsFilterModule } from '../shared/modules/search.module';

@NgModule({
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ListsFilterModule
  ],
  declarations: [CompaniesComponent, AddCompaniesComponent],
  providers: [CompaniesResolve]
})
export class CompaniesModule { }
