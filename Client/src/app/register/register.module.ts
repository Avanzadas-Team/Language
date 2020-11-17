import { HttpService } from './../http.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterModuleComponent } from './components/register-module/register-module.component';


@NgModule({
  declarations: [RegisterModuleComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    RegisterModuleComponent
  ],
  providers : [
    HttpService
  ],
  bootstrap: [
    RegisterModuleComponent
  ]
})
export class RegisterModule { }
