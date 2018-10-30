import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { VacatureComponent } from './vacature.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [VacatureComponent, DialogComponent],
})
export class VacatureModule { }
