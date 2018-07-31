import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faChevronRight, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { map } from '../../../node_modules/rxjs/operators';
import { Company } from './company.model';
import { CompaniesService } from '../shared/services/companies/companies.service';

library.add(faPlus, faChevronRight, faBuilding);

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies: Company[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private companiesService: CompaniesService
  
  ) { }

  ngOnInit() {
    this.companies = this.companiesService.companies;
    // this.activatedRoute.data.pipe(
    //   map((result) => {
    //     return result.companies;
    //   })
    // ).subscribe((result) => {
    //     this.companies = result;
    // })
  }

}
