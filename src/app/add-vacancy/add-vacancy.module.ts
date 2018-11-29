import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVacancyComponent, SubmitSnackbar } from './add-vacancy.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [AddVacancyComponent, SubmitSnackbar],
  exports: [AddVacancyComponent],
  entryComponents: [SubmitSnackbar],
})
export class AddVacancyModule { }
