import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeNotesComponent } from './fee-notes.component';

describe('FeeNotesComponent', () => {
  let component: FeeNotesComponent;
  let fixture: ComponentFixture<FeeNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
