import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadorComponent } from './indicador.component';

const routes: Routes = [
  {
    path: ':key', component: IndicadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicadorRoutingModule { }
