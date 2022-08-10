import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Iindicador } from 'src/app/models/indicador.model';
import { IndicadoresService } from '../../services/indicadores.service';

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.scss']
})
export class IndicadorComponent implements OnInit {
  indicador!: Iindicador;

  listadoInd: any;
  titulo!: string;

  errorHtml!: string;
  loading: boolean = false;

  constructor(
    private indicadoresService: IndicadoresService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ indicador }) => {
      this.indicador = indicador;
    });
    this.route.params.subscribe(({key}) => {
      if (key) {
        this.obtenerIndicadores(key);
      }
    });
  }

  obtenerIndicadores(key: string) {
    if (!key) {
      console.warn('Ningun indicador suministrado!');
      return;
    }
    this.loading = true;
    this.indicadoresService.obtenerIndicador(key, this.indicador?.replaceDot || false).subscribe({
      next: ({titulo, array}) => {
        this.listadoInd = array;
        this.titulo = titulo;
      },
      error: (err) => {
        console.warn(err);
        this.errorHtml = err.error.text;
      },
      complete: () => {this.loading = false}
    });
  }

}
