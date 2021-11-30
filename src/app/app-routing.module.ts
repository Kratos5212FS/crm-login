import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { CustomerPageComponent } from "./components/customer-page/customer-page.component";
import { ContactsPageComponent } from "./components/contacts-page/contacts-page.component";

const routes: Routes = [
  { path: 'customers', component: CustomerPageComponent },
  { path: 'contacts', component: ContactsPageComponent }
];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
