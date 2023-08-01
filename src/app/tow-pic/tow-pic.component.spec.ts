import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowPicComponent } from './tow-pic.component';

describe('TowPicComponent', () => {
  let component: TowPicComponent;
  let fixture: ComponentFixture<TowPicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TowPicComponent]
    });
    fixture = TestBed.createComponent(TowPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
