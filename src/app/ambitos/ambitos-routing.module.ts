import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbitHomeComponent } from './pages/ambit-home/ambit-home.component';
import { RectoradoComponent } from './pages/rectorado/rectorado.component';

const routes: Routes = [
    {
      path:'',
      component: AmbitHomeComponent,
      pathMatch: 'full',
      children:[
        { 
          path:'rectorado',
          component: RectoradoComponent
        },
        { 
          path: '**',
          redirectTo: 'rectorado'
        }
    ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbitosRoutingModule { }