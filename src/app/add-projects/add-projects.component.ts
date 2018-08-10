import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../shared/services/projects/projects.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private projectsService: ProjectsService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.project['projectCompany'] = null;
  }

  handleFileInput(event) {
    this.fileList = event.target.files;
  }

  onSubmit(){
    if(this.fileList && this.fileList.length > 0) {
      this.file = this.fileList[0];
    }
    this.projectsService.addProject(this.file, this.project).subscribe(
      (result) => {
        this.toastr.success('company added');
      },
      (error) => {
        console.log('err: ', error);
        this.toastr.error(error.error.message);
      }
    );
  }
}