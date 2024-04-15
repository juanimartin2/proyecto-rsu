import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultadesRoutingModule } from './facultades-routing.module';
import { RectoradoComponent } from './pages/rectorado/rectorado.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RectoradoComponent
  ],
  imports: [
    CommonModule,
    FacultadesRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    RectoradoComponent
  ]
})
export class FacultadesModule { }
