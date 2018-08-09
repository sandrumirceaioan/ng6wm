import { Injectable } from '@angular/core';
import { Company } from '../../../company/company.model';
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

  addCompany(params): Observable<any> {
    return this.http.post(this.apiPath + '/add', params, httpOptions).pipe(
      map((result: Company) => {
          this.company = result;
          this.companies.push(this.company);
          return result;
      }),
      catchError((error:HttpErrorResponse) => {
        return throwError(error);
      })
    );
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

  getOneById(params): Observable<Company> {
    return this.http.post(this.apiPath + '/oneById', params, httpOptions).pipe(
      map((result: Company) => {
          this.company = result;
          return result;
      }),
      catchError((error:HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  uploadLogo(file, company): Observable<Company> {
        let formData:FormData = new FormData();
        formData.append('companyLogo', file, file.name);
        formData.append('_id', company._id);
        return this.http.post(this.apiPath + '/upload', formData).pipe(
          map((result: Company) => {
            this.company = result;
            return result;
          }),
          catchError((error:HttpErrorResponse) => {
            return throwError(error);
          })
        );
  }

  updateOne(params): Observable<Company> {
    return this.http.post(this.apiPath + '/update', params, httpOptions).pipe(
      map((result: Company) => {
        this.company = result;
        return result;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

}