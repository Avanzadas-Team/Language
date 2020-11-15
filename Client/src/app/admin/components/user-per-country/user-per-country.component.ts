import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-user-per-country',
  templateUrl: './user-per-country.component.html',
  styleUrls: ['./user-per-country.component.scss']
})
export class UserPerCountryComponent implements OnInit {
  countries$;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.countries$ = this.GetUPC();
  }

  GetUPC() {
    var request = Array.of(this.http.GetUsersPerCountry().subscribe(data => {
      this.countries$ = data;
    }));
    return request;
  }
}
