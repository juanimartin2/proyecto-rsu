import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-rectorado',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './rectorado.component.html',
  styleUrl: './rectorado.component.scss'
})
export class RectoradoComponent {

  ngOnInit(): void {
    console.log("Entro ambitos /rectorado");
   }

}
