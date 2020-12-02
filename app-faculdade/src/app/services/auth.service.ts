import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(user: User) {


  }

  registrar(user: User) {
    return this.afa.createUserWithEmailAndPassword(user.email, user.password);
  }

  getAuth() {

  }
}
