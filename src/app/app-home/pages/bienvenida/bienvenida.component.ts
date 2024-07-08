import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OfficeSvgComponent } from '../../../shared/office-svg/office-svg.component';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [
    RouterModule,
    OfficeSvgComponent
  ],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.scss'
})
export class BienvenidaComponent {

}
