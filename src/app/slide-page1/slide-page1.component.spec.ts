import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePage1Component } from './slide-page1.component';

describe('SlidePage1Component', () => {
  let component: SlidePage1Component;
  let fixture: ComponentFixture<SlidePage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidePage1Component]
    });
    fixture = TestBed.createComponent(SlidePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
