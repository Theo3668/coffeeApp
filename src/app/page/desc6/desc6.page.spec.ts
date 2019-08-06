import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Desc6Page } from './desc6.page';

describe('Desc6Page', () => {
  let component: Desc6Page;
  let fixture: ComponentFixture<Desc6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Desc6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Desc6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
