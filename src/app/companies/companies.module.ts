import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { CompaniesRoutingModule } from './companies.routing';
import { AddCompaniesComponent } from '../add-companies/add-companies.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  declarations: [CompaniesComponent, AddCompaniesComponent]
})
export class CompaniesModule { }
