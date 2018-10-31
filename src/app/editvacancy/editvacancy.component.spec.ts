import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvacancyComponent } from './editvacancy.component';

describe('VacancyComponent', () => {
  let component: EditvacancyComponent;
  let fixture: ComponentFixture<EditvacancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditvacancyComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
