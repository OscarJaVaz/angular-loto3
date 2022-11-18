import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EActividadComponent } from './e-actividad.component';

describe('EActividadComponent', () => {
  let component: EActividadComponent;
  let fixture: ComponentFixture<EActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EActividadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
