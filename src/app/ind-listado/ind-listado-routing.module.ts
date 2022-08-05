import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndListadoComponent } from './ind-listado.component';

const routes: Routes = [
  {
    path: '', component: IndListadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndListadoRoutingModule { }
