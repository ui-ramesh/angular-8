import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStudnetComponent } from './form-studnet.component';

describe('FormStudnetComponent', () => {
  let component: FormStudnetComponent;
  let fixture: ComponentFixture<FormStudnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStudnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStudnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
