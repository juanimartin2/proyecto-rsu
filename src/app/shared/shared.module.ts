import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404/error404.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    Error404Component,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    Error404Component,
    FooterComponent
  ]
})
export class SharedModule { }
