import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyresponsesComponent } from './vacancyresponses.component';
import { MaterialModule } from '../material/material.module';
import { VacancyresponseService } from './vacancyresponses.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [
    VacancyresponseService,
  ],
  declarations: [VacancyresponsesComponent],
})
export class VacancyresponsesModule { }
