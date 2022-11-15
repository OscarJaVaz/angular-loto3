import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdonadoresComponent } from './gdonadores.component';

describe('GdonadoresComponent', () => {
  let component: GdonadoresComponent;
  let fixture: ComponentFixture<GdonadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdonadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GdonadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
