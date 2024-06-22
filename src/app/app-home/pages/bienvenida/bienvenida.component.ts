import { Component } from '@angular/core';
import { AppHomeRoutingModule } from '../../app-home-routing.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [
    RouterModule,
    AppHomeRoutingModule
  ],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.scss'
})
export class BienvenidaComponent {

}
