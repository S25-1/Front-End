import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
  ],
})
export class CalendarModule { }
