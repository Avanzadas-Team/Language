import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { HttpService } from '../http.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AllUsersComponent],
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
