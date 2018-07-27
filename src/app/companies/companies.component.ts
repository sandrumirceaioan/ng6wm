import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faChevronRight, faBuilding } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faChevronRight, faBuilding);

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies = [
    {companyName:'Conz'},
    {companyName:'ConzConz'},
    {companyName:'C7onz2Conz2'},
    {companyName:'Conz3Con6z2'},
    {companyName:'Co4nz7'},
    {companyName:'ConuzConz2Conz2'},
    {companyName:'Conz123'},
    {companyName:'Conyz'},
    {companyName:'CongzConz'},
    {companyName:'Conz52Conz2'},
    {companyName:'Cgonz73Conz2'},
    {companyName:'Conzfy67'},
    {companyName:'ConzConz2Conz2'},
    {companyName:'Conzd123'},
    {companyName:'Consz'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
