import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Desc1Page } from './desc1.page';

describe('Desc1Page', () => {
  let component: Desc1Page;
  let fixture: ComponentFixture<Desc1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Desc1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Desc1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
