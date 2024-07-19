import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule , Route, Router} from '@angular/router';
import { LogRectoradoComponent } from '../log-rectorado/log-rectorado.component';
import { AmbitosRoutingModule } from '../../../ambitos/ambitos-routing.module';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss'],
    standalone: true,
    imports: [RouterModule,RouterLink,LogRectoradoComponent,AmbitosRoutingModule]
})
export class InicioComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
  }

  goToRectorado() {
    this.router.navigate(['../rectorado']);

    if (this.router.url == 'rectorado') {
      console.log("ENTRÓ RECTORADO");
      console.log(this.router.url);
    } else {
      console.log("NO ENTRÓ RECTORADO");
    }
  }


}
