import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Usuario } from 'src/app/Models/Usuario';

@Component({
  selector: 'app-user-prof',
  templateUrl: './user-prof.component.html',
  styleUrls: ['./user-prof.component.scss']
})
export class UserProfComponent implements OnInit {

  constructor(private http : HttpService) { }

  hobbie: string;

  mediumAdd: string;

  mediumRem: string;

  usuarioAct : Usuario = new Usuario();

  loading: boolean = true;

  editing: boolean = false;

  editingH: boolean = false;

  editingMP: boolean = false;

  selected: string;

  mediums: string[] = ["skype", "whatsapp", "intercambio", "persona"];


  ngOnInit(): void {
    this.usuarioAct.Id = localStorage.getItem("id")
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
      this.usuarioAct.MedioPrac.forEach(med => {
        const index = this.mediums.indexOf(med);
        if(index !== -1){
          this.mediums.splice(index,1);
        }
      });
    })

  }

  toggleEditing(){
    this.editing = !this.editing;
  }

  toggleEditingH(){
    this.editingH = !this.editingH;
  }

  toggleEditingMP(){
    this.editingMP = !this.editingMP;
  }

  addHobbie(){
    this.usuarioAct.Hobbies.push(this.hobbie);
    console.log(this.usuarioAct.Hobbies);
  }

  delHobbie(){
    const index = this.usuarioAct.Hobbies.indexOf(this.selected);
    if(index !== -1){
      this.usuarioAct.Hobbies.splice(index,1);
    }
  }

  addMedium(){
    this.usuarioAct.MedioPrac.push(this.mediumAdd);

    this.usuarioAct.MedioPrac.forEach(med => {
      const index = this.mediums.indexOf(med);
      if(index !== -1){
        this.mediums.splice(index,1);
      }
    });

  }

  delMedium(){
    var index = this.usuarioAct.MedioPrac.indexOf(this.mediumRem);
    if(index !== -1){
      this.usuarioAct.MedioPrac.splice(index,1);
    }

    this.mediums = ["skype", "whatsapp", "intercambio", "persona"];


    this.usuarioAct.MedioPrac.forEach(med => {
    index = this.mediums.indexOf(med);
      if(index !== -1){
        this.mediums.splice(index,1);
      }
    });
  }

  submitChanges(){
    this.http.PostUserUpdate(this.usuarioAct).subscribe(res=>{
      window.location.reload();
    });
  }
}
