/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerBottomComponent } from './banner-bottom.component';

describe('BannerBottomComponent', () => {
  let component: BannerBottomComponent;
  let fixture: ComponentFixture<BannerBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
