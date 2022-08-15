import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsJsonComponent } from './patient-details-json.component';

describe('PatientDetailsJsonComponent', () => {
  let component: PatientDetailsJsonComponent;
  let fixture: ComponentFixture<PatientDetailsJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDetailsJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDetailsJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
