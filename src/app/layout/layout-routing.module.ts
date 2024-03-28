import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { ConsultarEmpleadosComponent } from './consultar-empleados/consultar-empleados.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children : [
      {
          path: '',
          component: ConsultarComponent
      },
      {
          path: 'solicitarVacaciones',
          component: SolicitarComponent
      },
      {
        path: 'consultarEmpleados',
        component: ConsultarEmpleadosComponent
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
