import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee.component';
import { MaterialModule } from '../material/material.module';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [AddEmployeeComponent, UploadPictureComponent],
  exports: [
    AddEmployeeComponent,
  ],
})
export class AddEmployeeModule { }
