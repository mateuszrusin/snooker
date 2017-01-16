/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoulComponent } from './foul.component';

describe('FoulComponent', () => {
  let component: FoulComponent;
  let fixture: ComponentFixture<FoulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
