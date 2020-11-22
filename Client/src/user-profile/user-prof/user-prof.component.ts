import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Usuario } from 'src/app/Models/Usuario';

@Component({
  selector: 'app-user-prof',
  templateUrl: './user-prof.component.html',
  styleUrls: ['./user-prof.component.scss']
})
export class UserProfComponent implements OnInit {

  holiwis: string = "holis";

  usuarioAct : Usuario = new Usuario();

  loading: boolean = true;

  editing: boolean = false;

  addHob: string;

  constructor(private http : HttpService) { }

  ngOnInit(): void {
    this.usuarioAct.NombreUsuario = "karce"
    var usuario : any;
    this.http.GetUsersbyUsername(this.usuarioAct).subscribe(res =>{
      usuario = res;
      this.usuarioAct.Nombre = usuario.nombre;
      this.usuarioAct.NombreUsuario = usuario.nombreUsuario;
      this.usuarioAct.POrigen = usuario.pOrigen;
      this.usuarioAct.Edad = usuario.edad;
      this.usuarioAct.Hobbies = usuario.hobbies;
      this.usuarioAct.MedioPrac = usuario.medioPrac;
      this.loading = false;
      console.log(res);
      console.log(this.usuarioAct);
    })
  }

  toggleEditing(){
    this.editing = !this.editing;
  }

  addHobbie(){
    console.log(this.addHob);
  }

}
