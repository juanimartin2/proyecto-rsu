import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-rectorado',
  templateUrl: './rectorado.component.html',
  styleUrls: ['./rectorado.component.scss']
})
export class RectoradoComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.userService.logOut();
  }

}
