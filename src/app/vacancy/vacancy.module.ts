import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyComponent } from './vacancy.component';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './dialog/dialog.component';
import { VacancyService } from './vacancy.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    VacancyComponent,
    DialogComponent,
  ],
  exports: [
    VacancyComponent,
  ],
  entryComponents: [
    DialogComponent,
  ],
  providers: [
    VacancyService,
  ],
})
export class VacancyModule { }
