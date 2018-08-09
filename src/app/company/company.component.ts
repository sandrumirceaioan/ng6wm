import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from './company.model';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus, faEdit, faChevronLeft, faUpload } from '@fortawesome/free-solid-svg-icons';
import { CompaniesService } from '../shared/services/companies/companies.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';

library.add(faPlus, faMinus, faEdit, faChevronLeft, faUpload);

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  company: Company;
  edit: false;
  file: File;
  fileList: FileList;

  constructor(
    private activatedRoute: ActivatedRoute,
    private companiesService: CompaniesService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((result) => {
      this.company = result.company;
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
