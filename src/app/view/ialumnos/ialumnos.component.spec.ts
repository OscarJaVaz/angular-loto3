import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IalumnosComponent } from './ialumnos.component';

describe('IalumnosComponent', () => {
  let component: IalumnosComponent;
  let fixture: ComponentFixture<IalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IalumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
