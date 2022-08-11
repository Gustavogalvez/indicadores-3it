import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicadorDetalleRoutingModule } from './indicador-detalle-routing.module';
import { IndicadorDetalleComponent } from './indicador-detalle.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    IndicadorDetalleComponent
  ],
  imports: [
    CommonModule,
    IndicadorDetalleRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressBarModule
  ]
})
export class IndicadorDetalleModule { }
