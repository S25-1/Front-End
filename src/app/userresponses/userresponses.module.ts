import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserresponsesComponent } from './userresponses.component';
import { MaterialModule } from '../material/material.module';
import { UserresponsesService } from './userresponses.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [
    UserresponsesService,
  ],
  declarations: [UserresponsesComponent],
})
export class UserresponsesModule { }
