import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';



@NgModule({
  declarations: [NavMenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavMenuComponent
  ]
})
export class CoreModule { }
