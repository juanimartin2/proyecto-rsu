import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LogRectoradoComponent } from './pages/log-rectorado/log-rectorado.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    InicioComponent,
    LogRectoradoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    InicioComponent,
    LogRectoradoComponent,
    HomeComponent
  ]
})
export class LoginModule { }
