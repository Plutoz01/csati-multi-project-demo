import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLibDemoComponent } from './shared-lib.component';

describe('SharedLibComponent', () => {
  let component: SharedLibDemoComponent;
  let fixture: ComponentFixture<SharedLibDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedLibDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedLibDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
