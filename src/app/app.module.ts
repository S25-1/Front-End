import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavfooterModule } from './navfooter/navfooter.module';

import { AppRoutingModule } from './app-routing.module';
import { AddEmployeeModule } from './add-employee/add-employee.module';
import { AddVacancyModule } from './add-vacancy/add-vacancy.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DashboardModule } from './dashboard/dashboard.module';
import { EditvacancyComponent } from './editvacancy/editvacancy.component';
import { VacancyModule } from './vacancy/vacancy.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { AccountModule } from './account/account.module';
import { AuthInterceptor } from './services/AuthInterceptor';
import { VacancyresponsesModule } from './vacancyresponses/vacancyresponses.module';

@NgModule({
  declarations: [
    AppComponent,
    EditvacancyComponent,
  ],
  imports: [
    DashboardModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NavfooterModule,
    AddEmployeeModule,
    AddVacancyModule,
    VacancyModule,
    LoginModule,
    AccountModule,
    VacancyresponsesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AppModule { }
