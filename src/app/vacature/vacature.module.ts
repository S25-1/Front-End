import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacatureComponent, VacatureDialog } from './vacature.component';
import { MaterialModule } from '../material/material.module';
import { AppComponent } from '../app.component';

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
  entryComponents: [
    VacatureDialog,
  ],
})
export class VacatureModule { }
