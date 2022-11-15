import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GactividadComponent } from './gactividad.component';

describe('GactividadComponent', () => {
  let component: GactividadComponent;
  let fixture: ComponentFixture<GactividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GactividadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GactividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
