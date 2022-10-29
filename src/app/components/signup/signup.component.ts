import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  homeform!: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl(),
    });
  }

  onSubmit(form: NgForm) {
    console.log(form)
    const email = form.value.email;
    const password = form.value.nome;
    console.log('email: ', email, ',', 'password: ', password);
    this.authService.signUp(email, password).subscribe( data=>{
      console.log(data);
    })
    form.reset();
  }

}





