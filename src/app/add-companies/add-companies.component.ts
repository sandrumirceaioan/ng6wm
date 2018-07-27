import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../shared/services/companies/companies.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-companies',
  templateUrl: './add-companies.component.html',
  styleUrls: ['./add-companies.component.scss']
})
export class AddCompaniesComponent implements OnInit {

  company = {};

  constructor(
    private companiesService: CompaniesService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.company);
    this.companiesService.addCompany(this.company).subscribe(
      (result) => {
        this.toastr.success('company added');
      },
      (error) => {
        this.toastr.error('company not added');
      }
    );
  }

}
