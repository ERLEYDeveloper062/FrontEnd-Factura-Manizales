import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentificarUsuarioComponent } from './indentificar-usuario.component';

describe('IndentificarUsuarioComponent', () => {
  let component: IndentificarUsuarioComponent;
  let fixture: ComponentFixture<IndentificarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndentificarUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndentificarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
