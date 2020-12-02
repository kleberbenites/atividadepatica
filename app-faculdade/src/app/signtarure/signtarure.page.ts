import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/interfaces/user'

@Component({
  selector: 'app-signtarure',
  templateUrl: './signtarure.page.html',
  styleUrls: ['./signtarure.page.scss'],
})
export class SigntarurePage implements OnInit {

  public userRegister: User = {};

  constructor() { }

  ngOnInit() {
  }

  
  registrar(){
    console.log('registrando');
    console.log(this.userRegister.email);
    console.log(this.userRegister.password);
  }


}
