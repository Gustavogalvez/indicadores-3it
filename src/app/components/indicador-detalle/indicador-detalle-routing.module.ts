import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadorResolver } from '../../resolvers/indicador.resolver';
import { IndicadorDetalleComponent } from './indicador-detalle.component';

const routes: Routes = [
  {
    path: ':key', component: IndicadorDetalleComponent, resolve: [IndicadorResolver]
  },
  {
    path: '**',
    redirectTo: '/listado'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicadorDetalleRoutingModule { }
