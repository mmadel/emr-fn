import { TestBed } from '@angular/core/testing';

import { UpcomingAppointmentService } from './upcoming-appointment.service';

describe('UpcomingAppointmentService', () => {
  let service: UpcomingAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
