import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyResolve } from './company.resolve';
import { CompanyRoutingModule } from './company.routing';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  declarations: [CompanyComponent],
  providers: [CompanyResolve]
})
export class CompanyModule { }
