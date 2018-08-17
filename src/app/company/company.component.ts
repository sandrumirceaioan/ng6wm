import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from './company.model';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus, faEdit, faChevronLeft, faUpload } from '@fortawesome/free-solid-svg-icons';
import { CompaniesService } from '../shared/services/companies/companies.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';
import { Project } from '../project/project.model';

library.add(faPlus, faMinus, faEdit, faChevronLeft, faUpload);

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  company: Company;
  edit: boolean = false;
  file: File;
  fileList: FileList;
  projects: Project[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private companiesService: CompaniesService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((result) => {
      this.company = result.company;
      this.projects = result.projects;
    });
  }

  onSubmit(): Company {
    this.companiesService.updateOne(this.company).subscribe(
      (result) => {
        this.toastr.success('company updated');
        this.company = result;
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    )
    return;
  }

  handleFileInput(event) {
    this.fileList = event.target.files;
  }

  uploadImage(){
    if(this.fileList && this.fileList.length > 0) {
      this.file = this.fileList[0];
      this.companiesService.uploadLogo(this.file, this.company).subscribe(
        (result)=>{
          this.toastr.success('logo updated');
          this.company = result;
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
