import { Pipe, PipeTransform } from '@angular/core';
import { Pais, Currency, Language } from '../interfaces/pais.interface';

@Pipe({
  name: 'separador'
})
export class PaisPipe implements PipeTransform {

  transform(pais: Pais, param: string): string {

    let formato : string = '';
    
    if(param === 'currencies'){
      pais.currencies.forEach( (currencie, index) => {
        if(index === pais.currencies.length - 1){
          formato += `${currencie.name}`;
        }else{
          formato += `${currencie.name}, `;
        }
      });
      return formato;
    }

    if(param === 'languages'){
      pais.languages.forEach( (language, index) => {
        if(index === pais.languages.length - 1){
          formato += `${language.name}`;
        }else{
          formato += `${language.name}, `;
        }
      });
      return formato;
    }

  }

}
