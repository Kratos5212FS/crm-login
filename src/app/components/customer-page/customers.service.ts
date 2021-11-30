import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { customer } from '../../customer.model';

const customersList = 'customers';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private db: AngularFireDatabase) {}

  getCustomers(callback: { (data: any): void; (arg0: any[]): void; }) {
    this.getList()
      .snapshotChanges()
      .subscribe(data => {
        let newArray: any[] = [];

        data.map((item: any) => {
          let newItem = item.payload.val();
          newItem.key = item.payload.key;
          newArray.push(newItem);
        });
        callback(newArray);
      });
  }

  removeCust(cust: customer) {
    this.getList('/' + cust.key).remove();
  }
  addCustomer(cust: customer) {
    this.getList().push(cust);
  }
  updateCustomer(cust: customer) {
    this.getObject(cust.key).update(cust);
  }

  private getList(key = '') {
    return this.db.list(customersList + key);
  }
  private getObject(key: string | undefined) {
    return this.db.object(customersList + '/' + key);
  }
}
