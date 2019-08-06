import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Desc5Page } from './desc5.page';

describe('Desc5Page', () => {
  let component: Desc5Page;
  let fixture: ComponentFixture<Desc5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Desc5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Desc5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
