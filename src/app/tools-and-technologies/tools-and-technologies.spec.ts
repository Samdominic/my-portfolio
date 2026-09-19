import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsAndTechnologies } from './tools-and-technologies';

describe('ToolsAndTechnologies', () => {
  let component: ToolsAndTechnologies;
  let fixture: ComponentFixture<ToolsAndTechnologies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsAndTechnologies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsAndTechnologies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
