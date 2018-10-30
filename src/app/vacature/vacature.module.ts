import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacatureComponent, VacatureDialog } from './vacature.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    VacatureComponent,
    VacatureDialog,
  ],
  exports: [
    VacatureComponent,
  ],
})
export class VacatureModule { }
