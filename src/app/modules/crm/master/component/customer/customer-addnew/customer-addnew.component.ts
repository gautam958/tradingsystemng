import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-customer-addnew',
  templateUrl: './customer-addnew.component.html',
  styleUrls: ['./customer-addnew.component.css'],
})
export class CustomerAddnewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  customerForm = new FormGroup({
    id: new FormControl(''),
    cust_name: new FormControl('', Validators.required),
    cust_email: new FormControl('', Validators.required),
    cust_phone: new FormControl('', Validators.required),
    cust_address: new FormControl('', Validators.required),
    cust_country: new FormControl('', Validators.required),
    cust_active: new FormControl('', Validators.required),
  });
  onSubmit() {
    console.warn(this.customerForm.value);
  }
}
