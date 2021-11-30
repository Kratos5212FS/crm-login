import { Component, OnInit } from '@angular/core';
import { customer } from '../../customer.model';
import { DisplayModesEnum } from '../customer-page/display-modes.enum';
import { CustomersService } from '../customer-page/customers.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  displayMode: DisplayModesEnum = DisplayModesEnum.table;

  DisplayModes = DisplayModesEnum;

  customers: customer[] | undefined;
constructor(private service: CustomersService) {
    service.getCustomers(data => {
      this.customers = data;
    });
  }

  searchFirst!: string;
  searchLast!: string;
  searchPhone!: string;

  filterCustomer(customer: { first: string; last: string; phone: string; }) {
    return (
      NotMatch(this.searchFirst, customer.first) ||
      NotMatch(this.searchLast, customer.last) ||
      NotMatch(this.searchPhone, customer.phone)
    );

    function NotMatch(
      textFromFilerTextBox: string,
      dataFromCustomerObject: string
    ) {
      return (
        textFromFilerTextBox &&
        dataFromCustomerObject.indexOf(textFromFilerTextBox) == -1
      );
    }
  }

  ngOnInit() {
  }

}