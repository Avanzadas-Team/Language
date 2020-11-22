import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfComponent } from './user-prof/user-prof.component';

const routes: Routes = [
  {path : 'profile', component : UserProfComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
