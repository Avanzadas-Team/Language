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

  age : number;

  lvlL : number = -1;

  lvlT : number = -1;

  levelT : number;

  levelL : number;

  sexuality : string;

  country : string;

  response;

  user = { nombre: "",
    edad: 0, porigen: "",
    sexo: "", idiomasens: [{inombre: "", nivelc: 0}],
    idiomasapr: [{inombre: "", nivelc: 0}], medioprac: [],
    hobbies: [], TipoU: 2 };

  teach : string;

  idioms = ["Spanish", "English", "German", "Italian", "Portuguese", "French", "Japanese", "Mandarin"];

  toteach : string[] = [];

  lvlTeach : number;

  learn : string;

  tolearn : string[] = [];

  medium : string;

  allmedium : string[] = [];

  hobbies : string[] = [];

  hobbie : string;

  ngOnInit(): void {
  }

  onToLearnChange(){
    this.lvlL = 1;
  }

  onToTeachChange(){
    this.lvlT = 1;
  }

  addIdiomsToTeach(){
    this.user.idiomasapr.push({inombre: this.teach, nivelc: this.lvlTeach});
    this.lvlT = -1;
    this.teach = "";
  }

  addIdiomsToLearn(){
    this.user.idiomasens.push({inombre: this.learn, nivelc: this.levelL});
    this.learn = "";
    this.lvlL = -1;
  }

  addMediums(){
    this.user.medioprac.push(this.medium);
  }

  addHobbie(){
    this.user.hobbies.push(this.hobbie);
  }

  register(){
    this.user.nombre = this.name;
    this.user.edad = this.age;
    this.user.porigen = this.country;
    this.user.sexo = this.sexuality;
    this.user.idiomasapr.shift();
    this.user.idiomasens.shift();
    this.http.registerUser(this.user).subscribe(r => {
      console.log("RESPONSE",r)});
  }

  addMedium(){
    this.user.medioprac.push(this.medium);
  }


}
