import { HttpService } from './../../../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  users$;
  langs$;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.users$ = this.GetUsersInfo();
  }

  GetUsersInfo() {
    var request = Array.of(this.http.GetUsers().subscribe(data => {
      this.users$ = data;
      console.log("USERS", data)
    }));
    return request;
  }

}
