import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleApointmentComponent } from './schedule-apointment.component';

describe('ScheduleApointmentComponent', () => {
  let component: ScheduleApointmentComponent;
  let fixture: ComponentFixture<ScheduleApointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleApointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleApointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
