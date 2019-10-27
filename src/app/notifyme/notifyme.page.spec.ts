import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifymePage } from './notifyme.page';

describe('NotifymePage', () => {
  let component: NotifymePage;
  let fixture: ComponentFixture<NotifymePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifymePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifymePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
