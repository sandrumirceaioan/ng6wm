import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../shared/services/companies/companies.service';
import { ToastrService } from 'ngx-toastr';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-add-companies',
  templateUrl: './add-companies.component.html',
  styleUrls: ['./add-companies.component.scss']
})
export class AddCompaniesComponent implements OnInit {

  company = {};
  selectedFile: File = null;

  constructor(
    private companiesService: CompaniesService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
    //  form.append(this.company);
    // };
   }

   onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(companyForm){
    companyForm.append(this.selectedFile);
    this.companiesService.addCompany(companyForm).subscribe(
      (result) => {
        this.toastr.success('Company added!');
        companyForm.resetForm();
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }

}
