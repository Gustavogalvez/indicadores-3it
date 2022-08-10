import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndicadoresService } from '../../services/indicadores.service';

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.scss']
})
export class IndicadorComponent implements OnInit {
  listadoInd: any;
  titulo!: string;

  errorHtml!: string;
  loading: boolean = false;

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
    if (!key) {
      console.warn('Ningun indicador suministrado!');
      return;
    }
    this.loading = true;
    this.indicadoresService.obtenerIndicador(key).subscribe(({titulo, array}) => {
      this.loading = false;
      this.listadoInd = array;
      this.titulo = titulo;
    }, err => {
      this.loading = false;
      console.log(err);
      this.errorHtml = err.error.text;
    });
    this.indicadoresService.obtenerIndicador(key).subscribe({
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
