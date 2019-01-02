<<<<<<< HEAD
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
=======
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
>>>>>>> ec192645b1167aaa54fa64e1420f585ba66bc4d3

@Injectable({
  providedIn: 'root'
})
export class AuthService {

<<<<<<< HEAD

  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth ) {
=======
  user$: Observable<firebase.User>;
  
  constructor(private afAuth: AngularFireAuth) {
>>>>>>> ec192645b1167aaa54fa64e1420f585ba66bc4d3
    this.user$ = afAuth.authState;
   }

  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }
}
