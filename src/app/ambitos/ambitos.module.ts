import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AmbitHomeComponent } from './pages/ambit-home/ambit-home.component';
import { AmbitosRoutingModule } from './ambitos-routing.module';


@NgModule({
  declarations: [
    AmbitHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AmbitosRoutingModule
  ],
  providers: [],
  exports: [
    AmbitHomeComponent
  ]
})
export class AmbitosModule { }
