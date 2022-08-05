import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndListadoRoutingModule } from './ind-listado-routing.module';
import { IndListadoComponent } from './ind-listado.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    IndListadoComponent
  ],
  imports: [
    CommonModule,
    IndListadoRoutingModule,
    MatListModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class IndListadoModule { }
