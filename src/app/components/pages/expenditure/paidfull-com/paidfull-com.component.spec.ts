import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidfullComComponent } from './paidfull-com.component';

describe('PaidfullComComponent', () => {
  let component: PaidfullComComponent;
  let fixture: ComponentFixture<PaidfullComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidfullComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidfullComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
