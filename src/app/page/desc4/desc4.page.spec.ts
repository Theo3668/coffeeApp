import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Desc4Page } from './desc4.page';

describe('Desc4Page', () => {
  let component: Desc4Page;
  let fixture: ComponentFixture<Desc4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Desc4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Desc4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
