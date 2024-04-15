import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitHomeComponent } from './ambit-home.component';

describe('AmbitHomeComponent', () => {
  let component: AmbitHomeComponent;
  let fixture: ComponentFixture<AmbitHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbitHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbitHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
