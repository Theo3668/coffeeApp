import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Desc3Page } from './desc3.page';

describe('Desc3Page', () => {
  let component: Desc3Page;
  let fixture: ComponentFixture<Desc3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Desc3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Desc3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
