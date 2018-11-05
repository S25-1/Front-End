import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVacancyComponent } from './add-vacancy.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AddVacancyComponent],
  exports: [AddVacancyComponent],
})
export class AddVacancyModule { }
