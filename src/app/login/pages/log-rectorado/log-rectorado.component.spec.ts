import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRectoradoComponent } from './log-rectorado.component';

describe('LogRectoradoComponent', () => {
  let component: LogRectoradoComponent;
  let fixture: ComponentFixture<LogRectoradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [LogRectoradoComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogRectoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
