import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import INDICADORES from '../constants/indicadores';

@Injectable({
  providedIn: 'root'
})
export class IndicadorResolver implements Resolve<boolean> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    route.data = {indicador: INDICADORES.find(ind => ind.key === route.params['key'])} || {}
    return of(true);
  }
}
