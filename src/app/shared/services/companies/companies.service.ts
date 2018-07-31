import { Injectable } from '@angular/core';
import { Company } from '../../../companies/company.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { of, throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  apiPath: string = '/api/companies';
  company: Company;
  companies: Company[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addCompany(params, image: File): Observable<any> {
    let formData: FormData = new FormData();

    if (image) formData.append('companyLogo', image, image.name);
    formData.append('companyInfo', params);

    return this.http.post(this.apiPath + '/add', formData);
    
    // .pipe(
    //   map((result: Company) => {
    //       this.company = result;
    //       this.companies.push(this.company);
    //       return result;
    //   }),
    //   catchError((error:HttpErrorResponse) => {
    //     return throwError(error);
    //   })
    // );
  }

  getAll(): Observable<Company[]> {
    return this.http.post(this.apiPath + '/all', null, httpOptions).pipe(
      map((result: Company[]) => {
          this.companies = result;
          return result;
      }),
      catchError((error:HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }


} 
