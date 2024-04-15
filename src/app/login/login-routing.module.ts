import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../shared/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LogRectoradoComponent } from './pages/log-rectorado/log-rectorado.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
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
      },
      { 
        path: '404',
        component: Error404Component,
      },
      { 
        path: '**',
        redirectTo: '404'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
