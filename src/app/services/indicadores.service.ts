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

  obtenerIndicador(key: string) {
    let date = (new Date(Date.now()));
    date.setDate(date.getDate() - 30);
    let url = `/dias/${formatDate(date, 'dd', 'es-CL')}`;
    if (key === 'utm' || key === 'ipc') {
      url = '';
    }
    return this.http.get(`${this.apiUrl}${key}/posteriores/${formatDate(date, 'YYYY', 'es-CL')}/${formatDate(date, 'MM', 'es-CL')}${url}?apikey=${this.apiKey}&formato=json`).pipe(
      map((ind: any) => {return {array: ind[Object.keys(ind)[0]], titulo: Object.keys(ind)[0]}})
    )
  }

}
