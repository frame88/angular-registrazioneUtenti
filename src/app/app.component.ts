import { AuthService } from 'src/app/auth/auth.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-registrazioneUtenti';

  constructor(private authService:AuthService) {}

  ngOnInit():void {
    let _storage= localStorage.getItem('user');
    if(localStorage.length > 0 && _storage != null && _storage != '') {
      const user = JSON.parse(_storage);
      this.authService.createUser(user.email, user.id, user._token, user._expirationDate);
      console.log(this.authService.user);
    }
  }
}
