import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicadorDetalleRoutingModule } from './indicador-detalle-routing.module';
import { IndicadorDetalleComponent } from './indicador-detalle.component';


@NgModule({
  declarations: [
    IndicadorDetalleComponent
  ],
  imports: [
    CommonModule,
    IndicadorDetalleRoutingModule
  ]
})
export class IndicadorDetalleModule { }
