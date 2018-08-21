import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faChevronRight, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Company } from '../company/company.model';
import { CompaniesService } from '../shared/services/companies/companies.service';

library.add(faPlus, faChevronRight, faBuilding);

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  
  companies: Company[];
  searchTerm: string;

  constructor(
    private companiesService: CompaniesService
  
  ) { }

  ngOnInit() {
    this.companies = this.companiesService.companies;
  }

  onSearchChange(e){
    this.searchTerm = e;
  }

}
