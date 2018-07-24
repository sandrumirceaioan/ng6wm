import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';
import { HeaderComponent } from '../header/header.component';
import { AuthGuard } from "../shared/guards/auth.guard";
import { UserResolve } from '../users/user.resolve';
import { NavigationComponent } from '../navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  declarations: [MainComponent, HeaderComponent, NavigationComponent],
  providers: [AuthGuard, UserResolve]
})
export class MainModule { }
