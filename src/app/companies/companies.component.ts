import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies = [
    {companyName:'Conz'},
    {companyName:'ConzConz'},
    {companyName:'Conz2Conz2'},
    {companyName:'Conz3Conz2'},
    {companyName:'Conz7'},
    {companyName:'ConzConz2Conz2'},
    {companyName:'Conz123'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
