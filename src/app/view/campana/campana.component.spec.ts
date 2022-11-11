import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanaComponent } from './campana.component';

describe('CampanaComponent', () => {
  let component: CampanaComponent;
  let fixture: ComponentFixture<CampanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
