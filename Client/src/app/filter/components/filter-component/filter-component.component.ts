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

  info = {idiomas: [] };

  
  info2 = {idiomasens: [], idiomasapr: []};

  users;

  seconF : number;

  languageL : string;

  ngOnInit(): void {
  }

  addToTeach(){
    this.info.idiomas.push(this.language);
  }

  filter(){
    if(this.seconF == 1){
      this.info2.idiomasens = this.info.idiomas;
      console.log("INFO: ", this.info2);
      this.http.getSecondFilter(this.info2).subscribe(r => {
        this.users = r;
        console.log(this.users);
      });
    }else{
      this.http.getUsrbyToTeach(this.info).subscribe(r => {
        this.users = r;
      console.log(this.users)});
    }
  }

  addToLearn(){
    this.info2.idiomasapr.push(this.languageL);
  }

  clean(){
    this.info = {idiomas: [] };
    this.info2 = {idiomasens: [], idiomasapr: []};
  }
}
