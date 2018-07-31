import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { ManageRoutingModule } from './manage.routing';
import { RoleGuard } from '../shared/guards/role.guard';

@NgModule({
  imports: [
    CommonModule,
    ManageRoutingModule
  ],
  declarations: [ManageComponent],
  providers: [RoleGuard]
})
export class ManageModule { }
