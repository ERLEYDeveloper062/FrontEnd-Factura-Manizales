import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarServiciosComponent } from './eliminar-servicios.component';

describe('EliminarServiciosComponent', () => {
  let component: EliminarServiciosComponent;
  let fixture: ComponentFixture<EliminarServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
