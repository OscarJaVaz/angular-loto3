import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalumnosComponent } from './galumnos.component';

describe('GalumnosComponent', () => {
  let component: GalumnosComponent;
  let fixture: ComponentFixture<GalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
