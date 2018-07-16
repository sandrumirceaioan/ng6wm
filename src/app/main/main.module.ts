import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';
import { HeaderComponent } from '../header/header.component';
import { AuthGuard } from "../shared/guards/auth.guard";

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  declarations: [MainComponent, HeaderComponent],
  providers: [AuthGuard]
})
export class MainModule { }
