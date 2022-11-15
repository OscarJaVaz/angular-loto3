import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IactividadComponent } from './iactividad.component';

describe('IactividadComponent', () => {
  let component: IactividadComponent;
  let fixture: ComponentFixture<IactividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IactividadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IactividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
