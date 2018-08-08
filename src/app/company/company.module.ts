import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyResolve } from './company.resolve';
import { CompanyRoutingModule } from './company.routing';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  declarations: [CompanyComponent],
  providers: [CompanyResolve]
})
export class CompanyModule { }
