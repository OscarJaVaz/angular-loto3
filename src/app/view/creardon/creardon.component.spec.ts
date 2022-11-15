import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreardonComponent } from './creardon.component';

describe('CreardonComponent', () => {
  let component: CreardonComponent;
  let fixture: ComponentFixture<CreardonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreardonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreardonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
