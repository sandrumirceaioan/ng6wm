import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNameFilterPipe } from '../filters/user-name.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [UserNameFilterPipe],
    exports: [UserNameFilterPipe]
})
export class UserNameFilterModule { }