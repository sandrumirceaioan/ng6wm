import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Project } from './project.model';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus, faEdit, faChevronLeft, faUpload } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from '../../../node_modules/ngx-toastr';
import { ProjectsService } from '../shared/services/projects/projects.service';

library.add(faPlus, faMinus, faEdit, faChevronLeft, faUpload);

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: Project;
  edit: boolean = false;
  file: File;
  fileList: FileList;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectsService: ProjectsService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((result) => {
      this.project = this.projectsService.project;
    });
  }

  onSubmit() {
    console.log(this.project);
    // this.projectsService.updateOne(this.project).subscribe(
    //   (result) => {
    //     this.toastr.success('company updated');
    //     this.project = result;
    //   },
    //   (error) => {
    //     this.toastr.error(error.error.message);
    //   }
    // )
  }

  handleFileInput(event) {
    this.fileList = event.target.files;
  }

  uploadImage(){
    if(this.fileList && this.fileList.length > 0) {
      this.file = this.fileList[0];
      this.projectsService.uploadLogo(this.file, this.project).subscribe(
        (result)=>{
          this.toastr.success('logo updated');
          this.project = result;
        },
        (error)=>{
          this.toastr.error(error.error.message);
        }
      );
    } else {
      this.toastr.error('no image selected');
    }
  }

}
