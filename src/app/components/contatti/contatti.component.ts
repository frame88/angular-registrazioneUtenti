import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase.service';


@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {
  persone: any;
  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
    this.firebase.getPersone('https://corso-angular-69a9b-default-rtdb.europe-west1.firebasedatabase.app/persone.json')
    .subscribe((data: any) => {
      console.log(data)
      this.persone = Object.keys(data).map((key) => { return data[key]})
      console.log(this.persone)
    })
  }

}
