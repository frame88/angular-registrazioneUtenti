import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  insertPersona(url: string, body: {}){
    return this.http.post(url, body)
  }

  getPersone(url: string) {
    return this.http.get(url)
    // return this.http.get(`${url}?auth=${this.authService.user.token}`)
  }

  patchPersona(url: string, id: string, body: {}){
    return this.http.patch(`${url}/${id}.json`, body)
  }


}
