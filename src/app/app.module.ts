import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { CustomersTableIcons } from './components/customers-table-icons.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AddEditDisplayCustomerComponent } from './components/customer-page/add-edit-display-customer/add-edit-display-customer.component';
import { RouterModule } from '@angular/router';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {AngularFireAuthGuardModule} from "@angular/fire/compat/auth-guard/";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const firebaseConfig = {
  apiKey: "AIzaSyB0ZRUPp-V9p6gEmlb71-Hhz3VzzNMfGdE",
  authDomain: "crm1-c146c.firebaseapp.com",
  databaseURL: "https://crm1-c146c-default-rtdb.firebaseio.com",
  projectId: "crm1-c146c",
  storageBucket: "crm1-c146c.appspot.com",
  messagingSenderId: "1044099151913",
  appId: "1:1044099151913:web:12ca57ad101a402ecd8438",
  measurementId: "G-X27L89ESPL"
};

@NgModule({
  imports: [
    AngularFireAuthGuardModule,
    BrowserModule,
    FormsModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,

    RouterModule.forRoot([
      {
        path: 'customers',
        component: CustomerPageComponent,
        canActivate: [AngularFireAuthGuard]
      },

      {
        path: 'contacts',
        component: ContactsPageComponent,
        canActivate: [AngularFireAuthGuard]
      },


      {
        path: 'login',
        component: LoginPageComponent
      },

      {
        path: '**',
        redirectTo: 'login'
      }
    ])
  ],
  declarations: [
    AppComponent,
    CustomersTableIcons,
    CustomerPageComponent,
    AddEditDisplayCustomerComponent,
    ContactsPageComponent,
    LoginPageComponent,
    TopnavComponent,
    SidenavComponent
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule {}
