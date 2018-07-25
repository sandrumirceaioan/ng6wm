import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule} from './dashboard.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
