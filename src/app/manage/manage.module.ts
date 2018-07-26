import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { ManageRoutingModule } from './manage.routing';

@NgModule({
  imports: [
    CommonModule,
    ManageRoutingModule
  ],
  declarations: [ManageComponent]
})
export class ManageModule { }
