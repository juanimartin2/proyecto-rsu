import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
    selector: 'app-log-rectorado',
    templateUrl: './log-rectorado.component.html',
    styleUrls: ['./log-rectorado.component.scss'],
    standalone: true,
    imports: [RouterModule,RouterLink]
})
export class LogRectoradoComponent implements OnInit {

  constructor(private userService:UserService) {}

  ngOnInit(): void {
  }
/*
  logIn(email : string, password : string){
    this.userService.logInMail(email, password);
  }
*/ 
}
