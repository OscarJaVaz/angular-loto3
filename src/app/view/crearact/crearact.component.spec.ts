import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearactComponent } from './crearact.component';

describe('CrearactComponent', () => {
  let component: CrearactComponent;
  let fixture: ComponentFixture<CrearactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
