import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-module',
  templateUrl: './register-module.component.html',
  styleUrls: ['./register-module.component.scss']
})
export class RegisterModuleComponent implements OnInit {

  constructor() { }

  name : string;

  age : number;

  sexuality : string;

  country : string;

  teach : string;

  idioms = ["Español", "Inglés", "Alemán", "Italiano", "Portugues", "Frances", "Japones", "Mandarín"];

  toteach : string[] = [];

  learn : string;

  tolearn : string[] = [];

  medium : string;

  allmedium : string[] = [];

  hobbies : string[] = [];

  hobbie : string;

  ngOnInit(): void {
  }

  addIdiomsToTeach(){
    this.toteach.push(this.teach);
  }

  addIdiomsToLearn(){
    this.tolearn.push(this.learn);
  }

  addMediums(){
    this.allmedium.push(this.medium);
  }

  addHobbie(){
    this.hobbies.push(this.hobbie);
  }

  register(){
    //enviar a función de httpservice
  }


}
