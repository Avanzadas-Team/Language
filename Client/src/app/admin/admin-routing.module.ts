import { UsersTeachLangComponent } from './components/users-teach-lang/users-teach-lang.component';
import { UserPerCountryComponent } from './components/user-per-country/user-per-country.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Admin/Users', component: AllUsersComponent },
  { path: 'Admin/Country', component: UserPerCountryComponent },
  { path: 'Admin/Languages', component: UsersTeachLangComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
