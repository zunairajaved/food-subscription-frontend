import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
const AUTH_API = 'http://localhost:3000/users/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor(private http: HttpClient, private router:Router) { }
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signIn', {
      email,
      password
    }, httpOptions);
  }
  register(fullName: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signUp', {
      fullName,
      email,
      password,
      
    }, httpOptions);
  }

  logout() {                     
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}