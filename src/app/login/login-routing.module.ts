import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LogRectoradoComponent } from './pages/log-rectorado/log-rectorado.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title:"Ingresar al sistema - RSU",
    pathMatch: 'full',
    children:[
      { 
        path: '',
        component: InicioComponent,
        pathMatch: 'full'
      },
      { 
        path: 'rectorado',
        component: LogRectoradoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
