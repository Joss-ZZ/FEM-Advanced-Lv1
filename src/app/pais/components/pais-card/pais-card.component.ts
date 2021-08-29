import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-card',
  templateUrl: './pais-card.component.html',
  styleUrls: ['./pais-card.component.scss']
})
export class PaisCardComponent implements OnInit {

  @Input() pais: Pais;
  constructor() { }

  ngOnInit(): void {
  }

}
