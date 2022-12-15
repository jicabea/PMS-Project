import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenultimateComponent } from './penultimate.component';

describe('PenultimateComponent', () => {
  let component: PenultimateComponent;
  let fixture: ComponentFixture<PenultimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenultimateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenultimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
