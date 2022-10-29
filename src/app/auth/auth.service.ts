import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZWJf_Qk3Z4r4HXaE67xMYxlg8lwECW1Y';
  signUpURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZWJf_Qk3Z4r4HXaE67xMYxlg8lwECW1Y';
  signInURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZWJf_Qk3Z4r4HXaE67xMYxlg8lwECW1Y';
  isLoggedIn = true;
  isAdmin = true;
  user: User | undefined;

  constructor(private http: HttpClient) { }

  isAuthenticated(){
    return this.isLoggedIn
  }

  isRoleAdmin(){
    return this.isAdmin
  }

  signUp(email: string, password: string) {
    return this.http.post(this.signUpURL, {email: email, password: password, returnSecureToken: true })
  }

  signIn(email: string, password: string) {
    return this.http.post(this.signInURL, {email: email, password: password, returnSecureToken: true })
  }

  createUser(email: string, id: string, token: string, expirationDate: Date) {
    this.user = new User(email, id, token, expirationDate);
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
    this.user = undefined;
    localStorage.removeItem('user');
  }
}
