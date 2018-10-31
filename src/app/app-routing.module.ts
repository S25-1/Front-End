import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { LoginComponent } from './login/login.component';
import { EditvacatureComponent } from './editvacature/editvacature.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vacancy', component: VacancyComponent },
  { path: 'editvacature', component: EditvacatureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
