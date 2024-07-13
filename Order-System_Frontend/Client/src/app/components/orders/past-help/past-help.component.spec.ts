import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastHelpComponent } from './past-help.component';

describe('PastHelpComponent', () => {
  let component: PastHelpComponent;
  let fixture: ComponentFixture<PastHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
