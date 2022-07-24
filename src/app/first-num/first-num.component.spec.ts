import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNumComponent } from './first-num.component';

describe('FirstNumComponent', () => {
  let component: FirstNumComponent;
  let fixture: ComponentFixture<FirstNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstNumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
