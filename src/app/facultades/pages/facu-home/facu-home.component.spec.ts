import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacuHomeComponent } from './facu-home.component';

describe('FacuHomeComponent', () => {
  let component: FacuHomeComponent;
  let fixture: ComponentFixture<FacuHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacuHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacuHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
