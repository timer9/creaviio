import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderHeaderPicComponent } from './under-header-pic.component';

describe('UnderHeaderPicComponent', () => {
  let component: UnderHeaderPicComponent;
  let fixture: ComponentFixture<UnderHeaderPicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnderHeaderPicComponent]
    });
    fixture = TestBed.createComponent(UnderHeaderPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
