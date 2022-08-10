import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicadorRoutingModule } from './indicador-routing.module';
import { IndicadorComponent } from './indicador.component';
import { IndicadoresService } from '../../services/indicadores.service';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    IndicadorComponent
  ],
  imports: [
    CommonModule,
    IndicadorRoutingModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressBarModule
  ],
  providers: [
    IndicadoresService
  ]
})
export class IndicadorModule { }
