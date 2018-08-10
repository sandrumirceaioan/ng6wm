import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsFilterPipe } from '../filters/list-filter.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [ListsFilterPipe],
    exports: [ListsFilterPipe]
})
export class ListsFilterModule { }