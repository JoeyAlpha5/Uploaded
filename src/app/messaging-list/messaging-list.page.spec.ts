import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingListPage } from './messaging-list.page';

describe('MessagingListPage', () => {
  let component: MessagingListPage;
  let fixture: ComponentFixture<MessagingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagingListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
