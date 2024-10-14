import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavigationBarComponent } from './home-navigation-bar.component';

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';


describe('HomeNavigationBarComponent', () => {
  let component: HomeNavigationBarComponent;
  let fixture: ComponentFixture<HomeNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNavigationBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
