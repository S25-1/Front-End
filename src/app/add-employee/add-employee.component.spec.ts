import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeComponent } from './add-employee.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AddemployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddEmployeeComponent,
        UploadPictureComponent,
      ],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
