import { TestBed } from '@angular/core/testing';

import { TrainingscheduleService } from './trainingschedule.service';

describe('TrainingscheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingscheduleService = TestBed.get(TrainingscheduleService);
    expect(service).toBeTruthy();
  });
});
