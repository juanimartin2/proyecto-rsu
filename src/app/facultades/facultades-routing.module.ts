import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RectoradoComponent } from './pages/rectorado/rectorado.component';
import { FacuHomeComponent } from './pages/facu-home/facu-home.component';

const routes: Routes = [
  {
    path:'',
    component: FacuHomeComponent,
    pathMatch: 'full',
    children:[
      { 
        path: 'rectorado',
        component: RectoradoComponent
      }
  ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultadesRoutingModule { }
