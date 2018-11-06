import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavfooterModule } from './navfooter/navfooter.module';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AddEmployeeModule } from './add-employee/add-employee.module';
import { AddVacancyModule } from './add-vacancy/add-vacancy.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    DashboardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavfooterModule,
    AddEmployeeModule,
    AddVacancyModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  exports: [
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
