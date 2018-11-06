import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavfooterModule } from './navfooter/navfooter.module';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AddEmployeeModule } from './add-employee/add-employee.module';
import { AddVacancyModule } from './add-vacancy/add-vacancy.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DashboardModule } from './dashboard/dashboard.module';
import { EditvacancyComponent } from './editvacancy/editvacancy.component';
import { VacancyModule } from './vacancy/vacancy.module';
import { VacancyService } from './vacancy/vacancy.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditvacancyComponent,
  ],
  imports: [
    DashboardModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavfooterModule,
    AddEmployeeModule,
    AddVacancyModule,
    VacancyModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [VacancyService],
  bootstrap: [AppComponent],
})
export class AppModule { }
