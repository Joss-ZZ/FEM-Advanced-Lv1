import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _regiones: string[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  baseUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  get regiones() {
    return [...this._regiones];
  }

  getPaises() : Observable<Pais[]>{

    const url: string = `${this.baseUrl}/all`

    return this.http.get<Pais[]>(url);
  }

  buscarPais(codigo: string): Observable<Pais> {

    const url: string = `${this.baseUrl}/alpha`;

    return this.http.get<Pais>(`${url}/${codigo}`);

  }

  buscarPorRegion(region: string): Observable<Pais[]> {

    const url: string = `${this.baseUrl}/region`;

    return this.http.get<Pais[]>(`${url}/${region}`);

  }

  buscarPaisPorTermino(termino: string): Observable<Pais[]> {

    const url: string = `${this.baseUrl}/name`;

    return this.http.get<Pais[]>(`${url}/${termino}`);
  }
}
