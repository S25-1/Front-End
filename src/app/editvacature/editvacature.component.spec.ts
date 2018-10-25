import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvacatureComponent } from './editvacature.component';

describe('VacatureComponent', () => {
  let component: EditvacatureComponent;
  let fixture: ComponentFixture<EditvacatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditvacatureComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
