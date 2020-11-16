import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { HttpService } from '../http.service';
import { HttpClientModule } from '@angular/common/http';
import { UserPerCountryComponent } from './components/user-per-country/user-per-country.component';


@NgModule({
  declarations: [AllUsersComponent, UserPerCountryComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
  ],
  exports: [
    AllUsersComponent
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AllUsersComponent]
})
export class AdminModule { }
