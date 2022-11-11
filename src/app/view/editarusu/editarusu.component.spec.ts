import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarusuComponent } from './editarusu.component';

describe('EditarusuComponent', () => {
  let component: EditarusuComponent;
  let fixture: ComponentFixture<EditarusuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarusuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarusuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
