import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAndMilestones } from './experience-and-milestones';

describe('ExperienceAndMilestones', () => {
  let component: ExperienceAndMilestones;
  let fixture: ComponentFixture<ExperienceAndMilestones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceAndMilestones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceAndMilestones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
