import { Component } from '@angular/core';
import { AppHomeRoutingModule } from '../../app-home-routing.module';
import { RouterModule } from '@angular/router';
import { OfficeSvgComponent } from '../../../shared/office-svg/office-svg.component';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [
    RouterModule,
    AppHomeRoutingModule,
    OfficeSvgComponent
  ],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.scss'
})
export class BienvenidaComponent {

}
