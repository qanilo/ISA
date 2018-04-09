import { IUser } from './IUser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserServiceService {

  private user;
  private loggedIn;
  email: string;
  friends: string[] = [];
  name: string;
  lastname: string;
  phoneNumber: number;
  city: string;
  username: string;

  
private _isLoggedIn:Subject<boolean> = new BehaviorSubject<boolean>(false);
 


    
    constructor(private http: HttpClient) {
      this.loggedIn = false;
  }

  setLoggedIn(){
      this.loggedIn = true;
  }

  getLoggedIn(){
      return this.loggedIn;
  }
  
  getUsername() {
    return  this.username;
  }
  
  logout(){
  this.loggedIn = false;
  }

  getUser(): Observable<IUser> {
    return this.user;
  }

  setUser() {
    //this.user = this.http.get<IUser>('assets/data/test.json');
    this.loggedIn = true;

    //console.log(this.user);
  }

  getEmail(){
      return this.email;
  }

  getFriends(){
      return this.friends;
  }

  getName(){
      return this.name;
  }
  getLastname(){
      return this.lastname;
  }
  getCity(){
      return this.city;
  }

}
