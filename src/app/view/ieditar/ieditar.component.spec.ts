import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IeditarComponent } from './ieditar.component';

describe('IeditarComponent', () => {
  let component: IeditarComponent;
  let fixture: ComponentFixture<IeditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IeditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
