import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {
  apiUrl = environment.api;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  obtenerIndicadorDetalle(key: string) {
    key = key.toLowerCase();
    return this.http.get(this.obtenerUrl(key)).pipe(
      map((ind: any) => {
        let indicadores: Array<any> = ind[Object.keys(ind)[0]] || [];
        return {
          array: indicadores,
          titulo: Object.keys(ind)[0]
        };
      })
    )
  }

  obtenerIndicador(key: string, replaceDot: boolean) {
    key = key.toLowerCase();
    return this.http.get(this.obtenerUrl(key)).pipe(
      map((ind: any) => {
        let indicadores: Array<any> = ind[Object.keys(ind)[0]] || [];
        indicadores = indicadores.map(({Fecha, Valor}) => {
          if (replaceDot) {
            Valor = Valor.replace(',', '.');
            Valor = Valor.replace('.', '');
          }
          return { Fecha, Valor }
        });
        return {
          array: indicadores,
          titulo: Object.keys(ind)[0]
        };
      })
    )
  }

  obtenerUrl(key: string): string {
    let fechaMesPasado = (new Date(Date.now()));
    fechaMesPasado.setDate(fechaMesPasado.getDate() - 30);
    const lastYear = ((new Date()).getFullYear() - 1);

    let url!: string;

    if (key === 'uf' || key === 'euro' ||  key === 'dolar') {
      url = `${this.apiUrl}${key}/posteriores/${formatDate(fechaMesPasado, 'YYYY', 'es-CL')}/${formatDate(fechaMesPasado, 'MM', 'es-CL')}/dias/${formatDate(fechaMesPasado, 'dd', 'es-CL')}?apikey=${this.apiKey}&formato=json`
    } else if (key === 'ipc' || key === 'utm') {
      url = `${this.apiUrl}${key}/posteriores/${lastYear}?apikey=${this.apiKey}&formato=json`
    }


    return url;
  }

}
