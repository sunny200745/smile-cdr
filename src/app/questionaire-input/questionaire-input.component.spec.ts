import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaireInputComponent } from './questionaire-input.component';

describe('QuestionaireInputComponent', () => {
  let component: QuestionaireInputComponent;
  let fixture: ComponentFixture<QuestionaireInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionaireInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionaireInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
