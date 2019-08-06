import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Desc2Page } from './desc2.page';

describe('Desc2Page', () => {
  let component: Desc2Page;
  let fixture: ComponentFixture<Desc2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Desc2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Desc2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
