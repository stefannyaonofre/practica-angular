import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.css']
})
export class SolicitarComponent {

  nm_id_usuario = new FormControl('');
  nm_dias_solicita = new FormControl('');
  fe_fecha_inicio = new FormControl('');
  fe_fecha_fin = new FormControl('');
  fe_fecha_retorna = new FormControl('');
  //ds_estado 
  ds_observaciones = new FormControl('');
  //fe_fecha_creacion DATE DEFAULT CURRENT_DA

}
