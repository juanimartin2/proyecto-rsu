import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { OfficeSvgComponent } from '../office-svg/office-svg.component';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,OfficeSvgComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
