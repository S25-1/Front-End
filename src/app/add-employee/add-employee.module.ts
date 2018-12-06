import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent, SubmitSnackbar } from './add-employee.component';
import { MaterialModule } from '../material/material.module';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [AddEmployeeComponent, UploadPictureComponent, SubmitSnackbar],
  exports: [AddEmployeeComponent],
  entryComponents: [SubmitSnackbar],
})
export class AddEmployeeModule { }
