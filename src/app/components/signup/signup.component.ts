import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  homeform!: FormGroup;

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl(),
    });
  }


  onSubmit() {
    console.log(this.homeform);

    this.firebase.insertPersona(
      'https://corso-angular-yt-default-rtdb.europe-west1.firebasedatabase.app/persone.json',

      { nome: this.homeform.value.nome, email: this.homeform.value.email }
    ).subscribe(data => {
      console.log(data);
    });
  }

  onPatchPersona() {
    this.firebase.patchPersona(
      'https://corso-angular-yt-default-rtdb.europe-west1.firebasedatabase.app/persone',
      '-NEeF_YvYMoA0TWdP40o',
      {nome:'rimpiazzo', email: 'dowhatuwant@fuku.it'}
    ).subscribe(data => {
      console.log(data);
    })
  }
}




