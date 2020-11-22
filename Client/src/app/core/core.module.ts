import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [NavMenuComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavMenuComponent,
    HomeComponent
  ]
})
export class CoreModule { }
