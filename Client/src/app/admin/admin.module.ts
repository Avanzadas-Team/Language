import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { HttpService } from '../http.service';
import { HttpClientModule } from '@angular/common/http';
import { UserPerCountryComponent } from './components/user-per-country/user-per-country.component';
import { UsersTeachLangComponent } from './components/users-teach-lang/users-teach-lang.component';


@NgModule({
  declarations: [AllUsersComponent, UserPerCountryComponent, UsersTeachLangComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
  ],
  exports: [
    AllUsersComponent,
    UserPerCountryComponent,
    UsersTeachLangComponent
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AllUsersComponent,
    UserPerCountryComponent,
    UsersTeachLangComponent
  ]
})
export class AdminModule { }
