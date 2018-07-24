import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { of, throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../../../users/user.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiPath: string = '/api/users';
  logged: User;
  users: User[] = [];
  mappedResults: object = {};

  constructor(private http: HttpClient) { }

checkLogged(){
  if (this.logged) {
    return of(this.logged);
  }
  let params = {token: localStorage.getItem('wmtoken')};
  return this.http.post(this.apiPath + '/checkLogged', params, httpOptions).pipe(
    map((result: User) => {
        this.logged = result;
        return result;
    }),
    catchError((error:HttpErrorResponse) => {
      return throwError(error);
    })
  );
}

loginUser(params): Observable<User>{
  return this.http.post(this.apiPath + '/login', params, httpOptions).pipe(
    map((result: User) => {
        localStorage.setItem('wmtoken', result.token);
        this.logged = result;
        return result;
    }),
    catchError((error:HttpErrorResponse) => {
      return throwError(error);
    })
  );
}

}

