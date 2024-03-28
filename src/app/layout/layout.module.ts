import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { ConsultarComponent } from './consultar/consultar.component';
import { LayoutComponent } from './layout/layout.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { HeaderComponent } from './header/header.component';
import { ConsultarEmpleadosComponent } from './consultar-empleados/consultar-empleados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConsultarComponent,
    LayoutComponent,
    SolicitarComponent,
    HeaderComponent,
    ConsultarEmpleadosComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatButtonModule, 
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
