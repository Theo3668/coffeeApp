import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Desc7Page } from './desc7.page';

describe('Desc7Page', () => {
  let component: Desc7Page;
  let fixture: ComponentFixture<Desc7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Desc7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Desc7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
