import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IperfilComponent } from './iperfil.component';

describe('IperfilComponent', () => {
  let component: IperfilComponent;
  let fixture: ComponentFixture<IperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IperfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
