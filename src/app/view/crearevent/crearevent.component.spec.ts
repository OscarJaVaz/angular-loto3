import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreareventComponent } from './crearevent.component';

describe('CreareventComponent', () => {
  let component: CreareventComponent;
  let fixture: ComponentFixture<CreareventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreareventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreareventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
