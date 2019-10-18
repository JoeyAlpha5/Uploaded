import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfeedPage } from './userfeed.page';

describe('UserfeedPage', () => {
  let component: UserfeedPage;
  let fixture: ComponentFixture<UserfeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfeedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
