import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData: any;

  constructor(
    private firebaseAuthenticationService: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
    ) {
      this.firebaseAuthenticationService.authState.subscribe((user)=>{
        if(user){
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
        } else {
          localStorage.setItem('user', 'null');
        }
      })
    }

  // logueo con email y contraseña  
  logInMail(email: string,password: string) {
    return this.firebaseAuthenticationService.signInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
      this.userData = userCredential.user
      this.observerUserState()
    })
    .catch((error) => {
      alert(error.message);
    })
  }

  // observer para ver si estamos logueados 
  observerUserState(){
    this.firebaseAuthenticationService.authState.subscribe((userState)=>{
      userState && this.ngZone.run(() => this.router.navigate(['login']))
    })
  }

  // retorna true cuando el user esta logueado
  get isLoggedIn(): boolean{
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }

  // deslogueo
  logOut(){
    return this.firebaseAuthenticationService.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['../']);
    })
  }

}
