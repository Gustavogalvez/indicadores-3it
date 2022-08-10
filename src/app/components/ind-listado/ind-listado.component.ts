import { Component, OnInit } from '@angular/core';
import { INDICADORES } from '../../constants/indicadores';

@Component({
  selector: 'app-ind-listado',
  templateUrl: './ind-listado.component.html',
  styleUrls: ['./ind-listado.component.scss']
})
export class IndListadoComponent implements OnInit {

  indicadores = INDICADORES;

  constructor() { }

  ngOnInit(): void {
  }

}
