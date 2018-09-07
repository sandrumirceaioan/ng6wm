import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { of, throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Task } from '../../../task/task.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

let headers = new Headers({'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class TasksService {
    apiPath: string = '/api/tasks';
    tasks: Task[] = [];
    task: Task;
    skip: number = 0;
    count: number;
    current: number = 1;

  constructor(
    private http: HttpClient
  ) { }

  add(task): Observable<Task> {
    return this.http.post(this.apiPath + '/add', task, httpOptions).pipe(
      map((result: Task) => {
        this.count++;
        return result;
     }),
      catchError((error:HttpErrorResponse) => {
        return throwError(error)
      })
    );
  }

  getAllPaginated(page): Observable<Task[]> {
    let skip = (page - 1) * 10;
    let params = new HttpParams().set('skip', skip.toString());
    return this.http.get(this.apiPath + '/allPaginated', {params: params}).pipe(
      map((result: any) => {
          this.tasks = result.tasks;
          this.count = result.count;
          return result;
      }),
      catchError((error:HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  
//   oneById(params): Observable<Project> {
//     return this.http.get(this.apiPath + '/oneById/' + params.id).pipe(
//       map((result: Project) => {
//           this.project = result;
//           return result;
//       }),
//       catchError((error:HttpErrorResponse) => {
//         return throwError(error);
//       })
//     );
//   }

//   allById(params): Observable<Project[]> {
//     return this.http.get(this.apiPath + '/allById/' + params.id).pipe(
//       map((result: Project[]) => {
//           return result;
//       }),
//       catchError((error:HttpErrorResponse) => {
//         return throwError(error);
//       })
//     );
//   }

//   uploadLogo(file, project): Observable<Project> {
//     let formData:FormData = new FormData();
//     formData.append('projectLogo', file, file.name);
//     formData.append('_id', project._id);
//     return this.http.put(this.apiPath + '/upload', formData).pipe(
//       map((result: Project) => {
//         this.project = result;
//         return result;
//       }),
//       catchError((error:HttpErrorResponse) => {
//         return throwError(error);
//       })
//     );
// }

// updateOne(params): Observable<Project> {
// return this.http.put(this.apiPath + '/update', params, httpOptions).pipe(
//   map((result: Project) => {
//     this.project = result;
//     return result;
//   }),
//   catchError((error: HttpErrorResponse) => {
//     return throwError(error);
//   })
// );
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

