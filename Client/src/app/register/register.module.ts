import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterModuleComponent } from './components/register-module/register-module.component';


@NgModule({
  declarations: [RegisterModuleComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  exports : [RegisterModuleComponent]
})
export class RegisterModule { }
