import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEventoComponent } from './e-evento.component';

describe('EEventoComponent', () => {
  let component: EEventoComponent;
  let fixture: ComponentFixture<EEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
