import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../shared/services/companies/companies.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronLeft);

@Component({
  selector: 'app-add-companies',
  templateUrl: './add-companies.component.html',
  styleUrls: ['./add-companies.component.scss']
})
export class AddCompaniesComponent implements OnInit {
  imageUrl: string = '/assets/default-image.png';
  company = {};

  constructor(
    private companiesService: CompaniesService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {

   }

  onSubmit(){
    this.companiesService.add(this.company).subscribe(
      (result) => {
        this.toastr.success('Company added!');
      },
      (error) => {
        console.log('err: ', error);
        this.toastr.error(error.error.message);
      }
    );
  }

  back() {
    this.router.navigate(['/manage/companies']);
  }
}