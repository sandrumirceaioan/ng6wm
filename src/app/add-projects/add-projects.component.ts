import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../shared/services/projects/projects.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CompaniesService } from '../shared/services/companies/companies.service';
import { Company } from '../company/company.model';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.scss']
})
export class AddProjectsComponent implements OnInit {
  imageUrl: string = '/assets/default-image.png';
  file: File;
  fileList: FileList;
  project = {};
  tags: string[] = [];
  companies: Company[];
  
  constructor(
    private projectsService: ProjectsService,
    private companiesService: CompaniesService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.companies = this.companiesService.companies;
    this.project['projectTags'] = [];
    this.project['projectCompany'] = null;
  }

  handleFileInput(event) {
    this.fileList = event.target.files;
  }

  onSubmit(){
    this.projectsService.addProject(this.project).subscribe(
      (result) => {
        this.toastr.success('company added');
        if (result) this.router.navigate([`/manage/projects/${result['_id']}`]);
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }
}