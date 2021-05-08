import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    customerId: new FormControl(),
    customerName: new FormControl(),
    customerSalary: new FormControl(),
    customerAddress: new FormControl(),
  });
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  saveCustomer() {
    console.log(this.customerForm);
  }
}
