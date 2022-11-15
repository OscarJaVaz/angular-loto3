import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IregistrarseComponent } from './iregistrarse.component';

describe('IregistrarseComponent', () => {
  let component: IregistrarseComponent;
  let fixture: ComponentFixture<IregistrarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IregistrarseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IregistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
