import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private r: Router, private auth: AngularFireAuth) {}

  login(username: string, pass: string) {
    if (username && pass) {
     this.auth.signInWithEmailAndPassword(username,pass).then(()=>  this.r.navigate(['customers']) )
     .catch( ()=> alert('warning , user not found my friend'))
     
    }
  }
}
