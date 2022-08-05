import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'listado',
    loadChildren: () => import('./ind-listado/ind-listado.module').then(m => m.IndListadoModule)
  },
  {
    path: 'indicador',
    loadChildren: () => import('./indicador/indicador.module').then(m => m.IndicadorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
