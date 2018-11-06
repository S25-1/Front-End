import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyComponent, VacancyDialog } from './vacancy.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    VacancyComponent,
    VacancyDialog,
  ],
  exports: [
    VacancyComponent,
  ],
  entryComponents: [
    VacancyDialog,
  ],
})
export class VacancyModule { }
