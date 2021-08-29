import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  quitarEspacios(valor: string): string {

    const valorInput = valor.trim();
    const terminoArray = valorInput.split(' ');
    const termino = terminoArray.join('');

    return termino;

  }

}
