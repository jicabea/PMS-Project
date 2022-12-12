import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExComponent } from './project-ex.component';

describe('ProjectExComponent', () => {
  let component: ProjectExComponent;
  let fixture: ComponentFixture<ProjectExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
