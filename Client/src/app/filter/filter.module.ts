import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponentComponent } from './components/filter-component/filter-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../http.service';


@NgModule({
  declarations: [FilterComponentComponent],
  imports: [
    CommonModule,
    FilterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    FilterComponentComponent
  ],
  providers : [
    HttpService
  ],
  bootstrap: [
    FilterComponentComponent
  ]
})
export class FilterModule { }
