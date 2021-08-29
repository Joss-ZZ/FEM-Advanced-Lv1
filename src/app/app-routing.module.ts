import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pais/pages/principal/principal.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { PaisGuard } from './guards/pais.guard';

const routes : Routes = [
  {
    path: '',
    component: PrincipalComponent,
    canActivate: [PaisGuard]
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent,
    canActivate: [PaisGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
