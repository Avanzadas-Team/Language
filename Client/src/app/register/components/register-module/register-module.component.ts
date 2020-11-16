import { Language } from './../../models/language';
import { HttpService } from './../../../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-module',
  templateUrl: './register-module.component.html',
  styleUrls: ['./register-module.component.scss']
})
export class RegisterModuleComponent implements OnInit {

  constructor(private http : HttpService) { }

  name : string;

  lang : Language;

  age : number;

  level : number;

  sexuality : string;

  country : string;

  response;

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
    var user = { nombre: this.name,
    edad: this.age, porigen: this.country,
    sexo: this.sexuality, idiomasens: this.toteach,
    idiomasapr: this.tolearn, medioprac: this.allmedium,
    hobbies: this.hobbies, TipoU: 2 };
    console.log(user);
    this.http.registerUser(user).subscribe(r => {
      console.log("RESPONSE",r)});
  }

  addMedium(){
    this.allmedium.push(this.medium);
  }


}
