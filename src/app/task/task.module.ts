import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TaskRoutingModule } from './task.routing';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule
  ],
  declarations: [TaskComponent]
})
export class TaskModule { }
