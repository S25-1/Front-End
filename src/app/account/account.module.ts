import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { VacancyService } from '../vacancy/vacancy.service';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
  ],
})
export class AccountModule { }
