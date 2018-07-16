import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
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
  return this.http.post(this.apiPath + '/checkLogged', params, httpOptions);
}

}

