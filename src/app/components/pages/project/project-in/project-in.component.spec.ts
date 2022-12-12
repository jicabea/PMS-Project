import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInComponent } from './project-in.component';

describe('ProjectInComponent', () => {
  let component: ProjectInComponent;
  let fixture: ComponentFixture<ProjectInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
