import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './pages/principal/principal.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisCardComponent } from './components/pais-card/pais-card.component';
import { RouterModule } from '@angular/router';
import { PaisPipe } from './pipes/pais.pipe';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PrincipalComponent,
    VerPaisComponent,
    PaisCardComponent,
    PaisPipe
  ],
  exports: [
    PrincipalComponent,
    VerPaisComponent,
    PaisCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class PaisModule { }
