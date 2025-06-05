import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobOportunityComponent } from './list-job-oportunity.component';

describe('ListJobOportunityComponent', () => {
  let component: ListJobOportunityComponent;
  let fixture: ComponentFixture<ListJobOportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListJobOportunityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListJobOportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
