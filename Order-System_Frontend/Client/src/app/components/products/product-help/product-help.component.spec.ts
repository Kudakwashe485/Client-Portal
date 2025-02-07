import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHelpComponent } from './product-help.component';

describe('ProductHelpComponent', () => {
  let component: ProductHelpComponent;
  let fixture: ComponentFixture<ProductHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
