import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from './company.model';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { CompaniesService } from '../shared/services/companies/companies.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';

library.add(faPlus, faMinus);

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

  handleFileInput(event) {
    this.fileList = event.target.files;
  }

  uploadImage(){
    if(this.fileList && this.fileList.length > 0) {
      this.file = this.fileList[0];
      this.companiesService.uploadLogo(this.file).subscribe(
        (result)=>{
          this.toastr.success('logo updated');
        },
        (error)=>{
          this.toastr.error(error.error.message);
        }
      );
    }
  }

}
