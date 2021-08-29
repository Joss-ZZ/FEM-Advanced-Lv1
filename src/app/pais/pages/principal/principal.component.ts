import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, catchError } from 'rxjs/operators';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { UtilsService } from '../../../shared/utils/utils.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  searchForm: FormGroup = this.fb.group({
    search: ['', Validators.required]
  }); 

  regionForm: FormGroup = this.fb.group({
    region: ['', Validators.required]
  }); 

  debouncer: Subject<string> = new Subject();

  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  existeError: boolean = false;

  regiones: string[] = [];

  termino: string = '';

  constructor(private paisService: PaisService,
              private fb: FormBuilder,
              private utilsService: UtilsService) { }

  ngOnInit(): void {

    this.paisService.getPaises()
      .subscribe(paises => {
        this.paises = paises;
      });

    this.regiones = this.paisService.regiones;

    this.regionForm.get('region').valueChanges
      .subscribe(region => {
        if(region){
          this.paisService.buscarPorRegion(region)
            .subscribe(paises => {
              this.paises = paises;
            });
        }
      });

    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(termino => {
        this.paisService.buscarPaisPorTermino(termino)
          .subscribe(paises => {
              this.existeError = false;
              this.paisesSugeridos = paises.splice(0,5)
          }, (err) => {
              this.existeError = true;
              this.paisesSugeridos = [];
          });
      });

  }

  buscar(){
    const termino = this.utilsService.quitarEspacios(this.searchForm.get('search').value);
    if(!termino){
      return;
    }
    this.paisService.buscarPaisPorTermino(termino)
      .subscribe(paises => {
        this.paises = paises;
        this.paisesSugeridos = [];
      }, (err)=> {
        console.log('Error en la búsqueda')
      });
  }

  buscarInput(event: any){
    this.termino = this.utilsService.quitarEspacios(event.target.value);
    if(!this.termino){
      this.paisesSugeridos = [];
      return;
    }
    this.debouncer.next(this.termino);
  }

}
