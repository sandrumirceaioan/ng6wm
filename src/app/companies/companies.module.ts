import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { CompaniesRoutingModule } from './companies.routing';
import { AddCompaniesComponent } from '../add-companies/add-companies.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CompaniesResolve } from './companies.resolve';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    FontAwesomeModule,
    FormsModule,
    FileUploadModule
  ],
  declarations: [CompaniesComponent, AddCompaniesComponent],
  providers: [CompaniesResolve]
})
export class CompaniesModule { }
