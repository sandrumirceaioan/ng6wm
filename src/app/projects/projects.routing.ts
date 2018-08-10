import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { AddProjectsComponent } from '../add-projects/add-projects.component';

const routes : Routes = [
    {
        path: '', 
        component: ProjectsComponent,
        data: { title: 'Projects', access: ['admin'] },
        children: [
            { path: 'add', component: AddProjectsComponent },
            { path: 'id/:id', loadChildren: '../company/company.module#CompanyModule' }
          ],
        pathMatch: 'prefix'
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule {}