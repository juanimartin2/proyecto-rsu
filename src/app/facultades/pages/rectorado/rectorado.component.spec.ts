import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectoradoComponent } from './rectorado.component';

describe('RectoradoComponent', () => {
  let component: RectoradoComponent;
  let fixture: ComponentFixture<RectoradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectoradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
