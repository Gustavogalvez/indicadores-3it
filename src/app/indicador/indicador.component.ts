import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndicadoresService } from '../services/indicadores.service';

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.scss']
})
export class IndicadorComponent implements OnInit {
  listadoInd: any;
  titulo!: string;

  errorHtml!: string;

  constructor(
    private indicadoresService: IndicadoresService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(({key}) => {
      if (key) {
        this.obtenerIndicadores(key);
      }
    });
  }

  obtenerIndicadores(key: string) {
    this.indicadoresService.obtenerIndicador(key).subscribe(({titulo, array}) => {
      this.listadoInd = array;
      this.titulo = titulo;
    }, err => {
      console.log(err);
      this.errorHtml = err.error.text;
    })
  }

}
