import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVacancyComponent } from './add-vacancy.component';
import { MaterialModule } from '../material/material.module';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [AddVacancyComponent, UploadPictureComponent],
  exports: [
    AddVacancyComponent,
  ],
})
export class AddVacancyModule { }
