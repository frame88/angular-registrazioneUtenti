import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  homeform!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl('Luca', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl()
    })
  }

  onSubmit() {
    console.log(this.homeform);
  }

}




