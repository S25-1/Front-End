import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyComponent, VacancyDialog } from './vacancy.component';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    VacancyComponent,
    VacancyDialog,
    DialogComponent,
  ],
  exports: [
    VacancyComponent,
  ],
  entryComponents: [
    VacancyDialog,
  ],
})
export class VacancyModule { }
