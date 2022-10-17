import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // @ViewChild('homeform') homeform!: NgForm

  constructor() { }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form)
    // console.log(this.homeform)
  }

}




