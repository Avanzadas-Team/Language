import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss']
})
export class FilterComponentComponent implements OnInit {



  constructor(private http : HttpService) { }
  
  language : string;

  languages = ["Spanish", "English", "German", "Italian", "Portuguese", "French", "Japanese", "Mandarin"];

  info2 = {idiomasens: [], idiomasapr: [], porigen : "", edadP: 0, edadF: 100};

  users;

  seconF : number;

  thirdF : number;

  languageL : string;

  active2 : number = -1;

  active3 : number = -1;

  active4 : number = -1;

  fourthF : number;

  country = "";

  Iage : number;

  Fage: number;

  ngOnInit(): void {
  }

  addToTeach(){
    this.info2.idiomasens.push(this.language);
    this.active2 = 1;
  }

  filter(){
    if(this.fourthF == 1){
      this.info2.edadP = this.Iage;
      this.info2.edadF = this.Fage;
      console.log("INFO: ", this.info2);
      this.http.getFourthFilter(this.info2).subscribe(r => {
        this.users = r;
        console.log(this.users);
      });
    }
    else if(this.thirdF == 1){
      console.log("INFO: ", this.info2);
      this.http.getThirdFilter(this.info2).subscribe(r => {
        this.users = r;
        console.log(this.users);
      });
    }
    else if(this.seconF == 1){
      console.log("INFO: ", this.info2);
      this.http.getSecondFilter(this.info2).subscribe(r => {
        this.users = r;
        console.log(this.users);
      });
    }else{
      this.http.getUsrbyToTeach(this.info2).subscribe(r => {
        this.users = r;
      console.log(this.users)});
    }
  }

  addToLearn(){
    this.info2.idiomasapr.push(this.languageL);
    this.active3 = 1;
  }

  addCountry(){
    this.info2.porigen = this.country;
    this.active4 = 1;
    console.log("Info",this.info2);
  }

  clean(){
    this.active2 = -1;
    this.active3 = -1;
    this.seconF = -1;
    this.thirdF = -1;
    this.info2 = {idiomasens: [], idiomasapr: [], porigen : "", edadP: 0, edadF: 100};
  }
}
