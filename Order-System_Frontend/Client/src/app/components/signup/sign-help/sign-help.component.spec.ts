import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignHelpComponent } from './sign-help.component';

describe('SignHelpComponent', () => {
  let component: SignHelpComponent;
  let fixture: ComponentFixture<SignHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
