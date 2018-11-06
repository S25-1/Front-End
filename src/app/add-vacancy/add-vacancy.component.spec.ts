import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVacancyComponent } from './add-vacancy.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AddVacancyComponent', () => {
  let component: AddVacancyComponent;
  let fixture: ComponentFixture<AddVacancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddVacancyComponent,
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
    fixture = TestBed.createComponent(AddVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
