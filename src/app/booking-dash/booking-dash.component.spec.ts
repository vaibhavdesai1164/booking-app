import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDashComponent } from './booking-dash.component';

describe('BookingDashComponent', () => {
  let component: BookingDashComponent;
  let fixture: ComponentFixture<BookingDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
