import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

@Injectable({
   providedIn: 'root'
})
export class AuthService {

   currentToken!: string;
   authendication : boolean = false ;
   constructor(private route: Router) { }

   RegisterUser(email: string, password: string) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(res => {
            this.route.navigate(['/products'])
            // console.log(res);
         })
         .catch(error => {
            console.log(error);
         })
   }

   LoginUser(email: string, password: string) {
      firebase.auth().signInWithEmailAndPassword(email, password)
         .then(res => {
            this.setToken();
            this.route.navigate(['/products'])
            // console.log(res);
         })
         .catch(error => {
            console.log(error);
            alert('Wrong Password!');
         })
   }

   setToken() {
      firebase.auth().currentUser?.getIdToken()
         .then((token: string) => {
            this.currentToken = token
         })
         this.authendication = this.currentToken ? true : false;
   }

   get isAuthendicated() {
         return this.authendication;
   }

   LogoutUser() {
      this.route.navigate(['/login']);
      firebase.auth().signOut();
      this.currentToken = '';
      this.authendication = false;
   }
}
