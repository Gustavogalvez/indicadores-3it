import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadorResolver } from './resolvers/indicador.resolver';

const routes: Routes = [
  {
    path: 'listado',
    loadChildren: () => import('./components/ind-listado/ind-listado.module').then(m => m.IndListadoModule)
  },
  {
    path: 'indicador',
    loadChildren: () => import('./components/indicador/indicador.module').then(m => m.IndicadorModule)
  },
  {
    path: 'indicador-detalle',
    loadChildren: () => import('./components/indicador-detalle/indicador-detalle.module').then(m => m.IndicadorDetalleModule)
  },
  {
    path: '**',
    redirectTo: '/listado'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
