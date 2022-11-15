import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeventosComponent } from './geventos.component';

describe('GeventosComponent', () => {
  let component: GeventosComponent;
  let fixture: ComponentFixture<GeventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
