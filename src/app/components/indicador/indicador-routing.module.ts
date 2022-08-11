import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadorResolver } from 'src/app/resolvers/indicador.resolver';
import { IndicadorComponent } from './indicador.component';

const routes: Routes = [
  {
    path: ':key', component: IndicadorComponent, resolve: [IndicadorResolver]
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
export class IndicadorRoutingModule { }
