import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcatlogComponent } from './productcatlog.component';

describe('ProductcatlogComponent', () => {
  let component: ProductcatlogComponent;
  let fixture: ComponentFixture<ProductcatlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductcatlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductcatlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
