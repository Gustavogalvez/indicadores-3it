import { Iindicador } from "../models/indicador.model";

const INDICADORES: Array<Iindicador> = [
  {
    nombre: 'Dólar',
    subtitulo: 'Dólar',
    key: 'dolar',
    currency: 'USD',
    replaceDot: true
  },
  {
    nombre: 'Euro',
    subtitulo: 'Euro',
    key: 'euro',
    currency: 'EUR',
    replaceDot: true
  },
  {
    nombre: 'IPC',
    subtitulo: 'IPC',
    key: 'ipc'
  },
  {
    nombre: 'UF',
    subtitulo: 'UF',
    key: 'uf',
    currency: 'CLP',
    replaceDot: true
  },
  {
    nombre: 'UTM',
    subtitulo: 'UTM',
    key: 'utm',
    currency: 'CLP',
    replaceDot: true
  }
];

export default INDICADORES;
