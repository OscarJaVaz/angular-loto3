import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhorariosComponent } from './ihorarios.component';

describe('IhorariosComponent', () => {
  let component: IhorariosComponent;
  let fixture: ComponentFixture<IhorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IhorariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IhorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
