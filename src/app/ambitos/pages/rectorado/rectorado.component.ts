import { Component } from '@angular/core';

@Component({
  selector: 'app-rectorado',
  standalone: true,
  imports: [],
  templateUrl: './rectorado.component.html',
  styleUrl: './rectorado.component.scss'
})
export class RectoradoComponent {

  ngOnInit(): void {
    console.log("Entro ambitos/rectorado");
   }

}
