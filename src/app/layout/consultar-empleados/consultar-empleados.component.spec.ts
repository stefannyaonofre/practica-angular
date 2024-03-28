import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEmpleadosComponent } from './consultar-empleados.component';

describe('ConsultarEmpleadosComponent', () => {
  let component: ConsultarEmpleadosComponent;
  let fixture: ComponentFixture<ConsultarEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEmpleadosComponent]
    });
    fixture = TestBed.createComponent(ConsultarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
