import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponentComponent } from './components/filter-component/filter-component.component';


@NgModule({
  declarations: [FilterComponentComponent],
  imports: [
    CommonModule,
    FilterRoutingModule
  ]
})
export class FilterModule { }
