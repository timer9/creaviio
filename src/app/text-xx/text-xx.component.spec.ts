import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextXxComponent } from './text-xx.component';

describe('TextXxComponent', () => {
  let component: TextXxComponent;
  let fixture: ComponentFixture<TextXxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextXxComponent]
    });
    fixture = TestBed.createComponent(TextXxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
