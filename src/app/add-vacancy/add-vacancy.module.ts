import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVacancyComponent } from './add-vacancy.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [AddVacancyComponent],
  exports: [
    AddVacancyComponent,
  ],
})
export class AddVacancyModule { }
