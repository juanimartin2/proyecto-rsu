import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { Error404Component } from './error404/error404.component';
import { FooterComponent } from './footer/footer.component';
import { LoginRoutingModule } from '../login/login-routing.module';

@NgModule({
  declarations: [
    NavComponent,
    Error404Component,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [
    NavComponent,
    Error404Component,
    FooterComponent
  ]
})
export class SharedModule { }
