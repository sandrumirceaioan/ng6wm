import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { of, throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Project } from '../../../project/project.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

let headers = new Headers({'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  apiPath: string = '/api/projects';
  projects: Project[] = [];
  allProjects: Project[] = [];
  project: Project;
  mappedResults: object = {};
  skip: number = 0;
  count: number;

  constructor(
    private http: HttpClient
  ) { }

  add(project): Observable<Project> {
    return this.http.post(this.apiPath + '/add', project, httpOptions).pipe(
      map((result: Project) => {
        this.projects.unshift(result);
        this.count = this.count + 1;
        return result;
     }),
      catchError((error:HttpErrorResponse) => {
        return throwError(error)
      })
    );
  }

  oneById(params): Observable<Project> {
    return this.http.get(this.apiPath + '/oneById/' + params.id).pipe(
      map((result: Project) => {
          this.project = result;
          return result;
      }),
      catchError((error:HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  all(): Observable<Project[]> {
    if (this.allProjects.length) return of(this.allProjects);
    return this.http.get(this.apiPath + '/all').pipe(
      map((result: Project[]) => {
          this.allProjects = result;
          return result;
      }),
      catchError((error:HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  getAll(resolve?): Observable<any> {
    // on resolve if already loaded, skip query 
    if (resolve && this.projects.length) return of(this.projects);

    let params = new HttpParams().set('skip', this.projects.length.toString());
    return this.http.get(this.apiPath + '/allLimited', {params: params}).pipe(
      map((result: any) => {
          this.projects = this.projects.concat(result.projects);
          this.count = result.count;
          return result;
      }),
      catchError((error:HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  allById(params): Observable<Project[]> {
    return this.http.get(this.apiPath + '/allById/' + params.id).pipe(
      map((result: Project[]) => {
          return result;
      }),
      catchError((error:HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  uploadLogo(file, project): Observable<Project> {
    let formData:FormData = new FormData();
    formData.append('projectLogo', file, file.name);
    formData.append('_id', project._id);
    return this.http.put(this.apiPath + '/upload', formData).pipe(
      map((result: Project) => {
        this.project = result;
        return result;
      }),
      catchError((error:HttpErrorResponse) => {
        return throwError(error);
      })
    );
}

updateOne(params): Observable<Project> {
return this.http.put(this.apiPath + '/update', params, httpOptions).pipe(
  map((result: Project) => {
    this.project = result;
    return result;
  }),
  catchError((error: HttpErrorResponse) => {
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