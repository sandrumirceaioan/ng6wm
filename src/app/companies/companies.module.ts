import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { CompaniesRoutingModule } from './companies.routing';

@NgModule({
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ],
  declarations: [CompaniesComponent]
})
export class CompaniesModule { }
