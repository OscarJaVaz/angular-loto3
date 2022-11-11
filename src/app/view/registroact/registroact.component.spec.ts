import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroactComponent } from './registroact.component';

describe('RegistroactComponent', () => {
  let component: RegistroactComponent;
  let fixture: ComponentFixture<RegistroactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
