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
import { VacancyresponsesComponent } from './vacancyresponses/vacancyresponses.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vacancy', component: VacancyComponent },
  { path: 'editvacancy', component: EditvacancyComponent },
  { path: 'addvacancy', component: AddVacancyComponent },
  { path: 'vacancyresponses', component: VacancyresponsesComponent },
];

// This list is used for the dashboard and navigation components
export const NAVITEMS: NavItem[] = [
  // { name: 'home', path: '', icon: 'home' },
  { name: 'add employee', path: 'addemployee', icon: 'person_add', userrole: 'employer' },
  { name: 'login', path: 'login', icon: 'account_circle', userrole: null },
  { name: 'list vacancies', path: 'vacancy', icon: 'view_list', userrole:  'employer' },
  { name: 'list vacancies', path: 'vacancy', icon: 'view_list', userrole:  'employee' },
  // { name: 'edit vacancies', path: 'editvacancy', icon: 'insert_comment' },
  { name: 'add vacancies', path: 'addvacancy', icon: 'add_comment', userrole: 'employer' },
  { name: 'vacancy responses', path: 'vacancyresponses',
    icon: 'view_list', userrole: 'employer' },
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

interface NavItem {
  name: string;
  path: string;
  icon: string;
  userrole: string;
}
