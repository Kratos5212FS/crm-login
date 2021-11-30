import { Component, OnInit, VERSION } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private r: Router, private auth:AngularFireAuth) {
  
    this.auth.onAuthStateChanged(userDetails => {this.isLoggedIn= !!userDetails})
      }
    
      logout() {
     this.auth.signOut().then(()=> this.r.navigate(['login']));
    
      }
      isLoggedIn:boolean = false;

  ngOnInit(): void {
  }

}
