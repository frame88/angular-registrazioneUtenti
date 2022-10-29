import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form)
    const email = form.value.email;
    const password = form.value.nome;
    console.log('email: ', email, ',', 'password: ', password);
    this.authService.signIn(email, password).subscribe((data: any) => {
      console.log(data);

      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
      this.authService.createUser(data.email, data.localId, data.idToken, expirationDate);
      console.log(this.authService.user);
      localStorage.setItem('user', JSON.stringify(this.authService.user));

      console.log(this.authService.user);
    })
    form.reset();
  }

  onLogout() {
    this.authService.logout();
  }
}
