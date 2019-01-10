import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyresponsesComponent } from './vacancyresponses.component';

describe('VacancyresponsesComponent', () => {
  let component: VacancyresponsesComponent;
  let fixture: ComponentFixture<VacancyresponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VacancyresponsesComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyresponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
