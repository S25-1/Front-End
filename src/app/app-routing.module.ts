import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule }    from '@angular/platform-browser';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { LoginComponent } from './login/login.component';
import { EditvacancyComponent } from './editvacancy/editvacancy.component';
import { AddVacancyComponent } from './add-vacancy/add-vacancy.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vacancy', component: VacancyComponent },
  { path: 'editvacancy', component: EditvacancyComponent },
  { path: 'addvacancy', component: AddVacancyComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
