import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {

  pais: Pais;

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService,
              private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.buscarPais(id) )
      ).subscribe( pais => {
        this.pais = pais;
      });

  }

  back(){
    this.router.navigateByUrl('/');
  }

}
