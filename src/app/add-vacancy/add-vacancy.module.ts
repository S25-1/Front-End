import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVacancyComponent } from './add-vacancy.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [AddVacancyComponent],
})
export class AddVacancyModule { }
