import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextXComponent } from './text-x.component';

describe('TextXComponent', () => {
  let component: TextXComponent;
  let fixture: ComponentFixture<TextXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextXComponent]
    });
    fixture = TestBed.createComponent(TextXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
