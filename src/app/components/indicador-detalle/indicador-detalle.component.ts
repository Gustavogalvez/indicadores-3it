import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iindicador } from 'src/app/models/indicador.model';
import { IndicadoresService } from '../../services/indicadores.service';
import Chart, { ChartData } from 'chart.js/auto'
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-indicador-detalle',
  templateUrl: './indicador-detalle.component.html',
  styleUrls: ['./indicador-detalle.component.scss']
})
export class IndicadorDetalleComponent implements OnInit {
  indicador!: Iindicador;
  loading!: boolean;
  titulo!: string;
  myChart: any;
  lastIndicador: any;

  constructor(
    private indicadoresService: IndicadoresService,
    private route: ActivatedRoute,
    private router: Router
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
    this.indicadoresService.obtenerIndicadorDetalle(key).subscribe({
      next: ({titulo, array}) => {
        this.titulo = titulo;
        this.crearGraficos(array);
        this.lastIndicador = array[array.length - 1];
      },
      error: (err: any) => {
        console.warn(err);
        this.router.navigate(['/listado']);
      },
      complete: () => {this.loading = false;}
    });
  }

  crearGraficos(array: Array<{Valor: string, Fecha: string}>) {
    const ctx: any = (document.getElementById('myChart') as any).getContext('2d');
    this.myChart = new Chart(ctx, {
      type: 'line',
      data: this.getData(array)
    });
  }

  getData(array: Array<{Valor: string, Fecha: string}>): any {
    let data = array.map(item => {
      return {
        x: formatDate(item.Fecha,'YYYY-MM-dd', 'es-CL'),
        y: item.Valor
      }
    });
    return {
      datasets: [{
        label: this.titulo,
        backgroundColor: 'skyblue',
        borderColor: '#87ceeb7d',
        data
      }]
    };
  }

}
