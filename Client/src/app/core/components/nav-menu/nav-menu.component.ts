import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  tipoU = localStorage.getItem("tipoU");

  ngOnInit(): void {
  }

  logout() {
    location.replace('');
    localStorage.setItem("tipoU", "0");
    localStorage.setItem("id", "");
  }

}
