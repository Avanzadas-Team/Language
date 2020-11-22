import { HttpService } from 'src/app/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.scss']
})
export class LoginModuleComponent implements OnInit {

  constructor(private http : HttpService) { }

  username : string;

  password : string;

  info;

  tipoU = "0";


  ngOnInit(): void {
    this.tipoU = localStorage.getItem("tipoU");
  }

  login(){
    this.http.login({nombreU: this.username, contrasena: this.password}).subscribe(r => {
      this.info = r;
      console.log("Response:", r);
      if(this.info.tipoU != 0){
        console.log("Entra");
        localStorage.setItem("tipoU",this.info.tipoU);
        localStorage.setItem("id", this.info.id);
        this.tipoU = localStorage.getItem("tipoU");
        location.reload();
        console.log(localStorage.getItem("tipoU"));
      }
    });
    
  }

}
