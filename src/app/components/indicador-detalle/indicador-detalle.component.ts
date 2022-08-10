import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iindicador } from 'src/app/models/indicador.model';
import { IndicadoresService } from '../../services/indicadores.service';

@Component({
  selector: 'app-indicador-detalle',
  templateUrl: './indicador-detalle.component.html',
  styleUrls: ['./indicador-detalle.component.scss']
})
export class IndicadorDetalleComponent implements OnInit {
  indicador!: Iindicador;
  loading!: boolean;

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
      next: ({}) => {
      },
      error: (err: any) => {
        console.warn(err);
        this.router.navigate(['/listado']);
      },
      complete: () => {this.loading = false}
    });
  }

}
