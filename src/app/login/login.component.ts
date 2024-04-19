import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor( 
    private auth: AngularFireAuth,
    private db: AngularFireDatabase
  ){}

  loginUser( event: any ){
    console.log( 'event', event )
    // this.auth.createUserWithEmailAndPassword( event.email, event.password )
    // .then( res => console.log(res))
    // .catch( error => console.error(error))

    // this.auth.signInWithEmailAndPassword( event.email, event.password )
    // .then( res => console.log(res))
    // .catch( error => console.error(error))

    this.db.list("users").push({"email": event.email})

  }

}
