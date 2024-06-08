import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionDosfaComponent } from './identificacion-dosfa.component';

describe('IdentificacionDosfaComponent', () => {
  let component: IdentificacionDosfaComponent;
  let fixture: ComponentFixture<IdentificacionDosfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacionDosfaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificacionDosfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
