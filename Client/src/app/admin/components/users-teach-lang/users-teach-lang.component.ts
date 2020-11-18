import { HttpService } from 'src/app/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-teach-lang',
  templateUrl: './users-teach-lang.component.html',
  styleUrls: ['./users-teach-lang.component.scss']
})
export class UsersTeachLangComponent implements OnInit {
  tLangs$;
  lLangs$;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.tLangs$ = this.GetUPLT();
    this.lLangs$ = this.GetUPLL();
  }

  GetUPLT() {
    var request = Array.of(this.http.GetUsersPerTLang().subscribe(data => {
      this.tLangs$ = data;
    }));
    return request;
  }

  GetUPLL() {
    var request = Array.of(this.http.GetUsersPerLLang().subscribe(data => {
      this.lLangs$ = data;
    }));
    return request;
  }

}
