import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidpartialComponent } from './paidpartial.component';

describe('PaidpartialComponent', () => {
  let component: PaidpartialComponent;
  let fixture: ComponentFixture<PaidpartialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidpartialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidpartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
