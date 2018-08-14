import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { of, throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Project } from '../../../project/project.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  apiPath: string = '/api/projects';
  projects: Project[] = [];
  project: Project;
  mappedResults: object = {};

  constructor(
    private http: HttpClient
  ) { }

  addProject(project): Observable<Project>{
    return this.http.post(this.apiPath + '/add', project, httpOptions).pipe(
      map((result: Project) => {
        this.projects.push(result);
        return result;
     }),
      catchError((error:HttpErrorResponse) => {
        return throwError(error)
      })
    );
  }

  getOneById(params): Observable<Project> {
    return this.http.post(this.apiPath + '/oneById', params, httpOptions).pipe(
      map((result: Project) => {
          this.project = result;
          return result;
      }),
      catchError((error:HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  // getAll(): Observable<Project[]>{
  //   return this.http.post(this.apiPath + '/all', {}, httpOptions).map((result: Project[]) => {
  //                   this.projects = result;
  //                   this.mapedResults(result);
  //                   return result;
  //                   })
  //                   .catch((error:HttpErrorResponse) => {
  //                       return Observable.throw(error)
  //                     });
  // }

  // mapedResults(results){
  //   let length = results.length;
  //   for (let i=0;i<length;i++) {
  //     this.mappedResults[results[i]._id] = results[i];
  //   }
  // }

  // getOne(params): Observable<Project>{
  //   return this.http.post(this.apiPath + '/one', params, httpOptions).map((result: Project) => {
  //     this.project = result;
  //     return result;
  //   })
  //   .catch((error:HttpErrorResponse) => {
  //     return Observable.throw(error);
  //   });
  // }

  // updateOne(project: Project): Observable<Project>{
  //   return this.http.put(this.apiPath + '/update', project, httpOptions).map((result: Project) => {
  //     this.project = result;
  //     return result;
  //   }).catch((error: HttpErrorResponse) => {
  //     return Observable.throw(error);
  //   });
  // }

  // deleteOne(params): Observable<Project>{
  //   return this.http.post(this.apiPath + '/delete', params).map((result) => {
  //     return result;
  //   }).catch((error: HttpErrorResponse) => {
  //     return Observable.throw(error);
  //   });
  // }

}