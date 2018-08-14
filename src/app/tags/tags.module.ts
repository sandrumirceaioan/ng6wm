import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TagsComponent } from "./tags.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule ,FormsModule],
    declarations: [TagsComponent],
    exports: [TagsComponent]
})
export class TagsModule {

}