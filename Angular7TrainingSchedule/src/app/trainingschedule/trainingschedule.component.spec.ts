import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingscheduleComponent } from './trainingschedule.component';

describe('TrainingscheduleComponent', () => {
  let component: TrainingscheduleComponent;
  let fixture: ComponentFixture<TrainingscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
