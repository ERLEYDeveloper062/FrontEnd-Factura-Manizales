import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPagosComponent } from './registrar-pagos.component';

describe('RegistrarPagosComponent', () => {
  let component: RegistrarPagosComponent;
  let fixture: ComponentFixture<RegistrarPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPagosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
