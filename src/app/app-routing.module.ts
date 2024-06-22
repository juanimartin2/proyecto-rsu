import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './app-home/pages/bienvenida/bienvenida.component';
import { Error404Component } from './shared/error404/error404.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: BienvenidaComponent,
    pathMatch: 'full'
  },
  {
    path: "login",
    loadChildren: () => import('./login/login.module'). then (m => m.LoginModule)
  },
  {
    path: "ambitos",
    loadChildren: () => import('./ambitos/ambitos.module'). then (m => m.AmbitosModule)
  },
  { 
    path: '404',
    component: Error404Component,
  },
  {
    path:'**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
