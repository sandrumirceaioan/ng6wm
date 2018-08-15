import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { AddProjectsComponent } from '../add-projects/add-projects.component';
import { ProjectsResolve } from './projects.resolve';
import { CompaniesResolve } from '../companies/companies.resolve';

const routes : Routes = [
    {
        path: '', 
        component: ProjectsComponent,
        data: { title: 'Projects', access: ['admin', 'manager'] },
        children: [
            { path: 'add', component: AddProjectsComponent },
            { path: ':id', loadChildren: '../project/project.module#ProjectModule' }
        ],
        resolve: {
            projects: ProjectsResolve,
            companies: CompaniesResolve
        },
        pathMatch: 'prefix'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule {}