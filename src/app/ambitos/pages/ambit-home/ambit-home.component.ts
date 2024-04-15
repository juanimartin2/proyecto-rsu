import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ambit-home',
  templateUrl: './ambit-home.component.html',
  styleUrls: ['./ambit-home.component.scss']
})
export class AmbitHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   console.log("Entro Ambitos Home");
  }

}
