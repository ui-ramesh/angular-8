import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingCommunicationComponent } from './sibling-communication.component';

describe('SiblingCommunicationComponent', () => {
  let component: SiblingCommunicationComponent;
  let fixture: ComponentFixture<SiblingCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiblingCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
