import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioperfilComponent } from './usuarioperfil.component';

describe('UsuarioperfilComponent', () => {
  let component: UsuarioperfilComponent;
  let fixture: ComponentFixture<UsuarioperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioperfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
