import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VacatureComponent } from './vacature/vacature.component';
import { LoginComponent } from './login/login.component';
import { EditvacatureComponent } from './editvacature/editvacature.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vacature', component: VacatureComponent },
  { path: 'editvacature', component: EditvacatureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
