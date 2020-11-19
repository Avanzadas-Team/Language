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

  ngOnInit(): void {
  }

  addToTeach(){
    this.info.idiomas.push(this.language);
  }

  filter(){
    this.http.getUsrbyToTeach(this.info).subscribe(r => {
      console.log("RESPONSE",r)});
  }

}
