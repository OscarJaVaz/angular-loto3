import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhorariosComponent } from './ghorarios.component';

describe('GhorariosComponent', () => {
  let component: GhorariosComponent;
  let fixture: ComponentFixture<GhorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhorariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
