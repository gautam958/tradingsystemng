import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { customermodel } from '../../../model/customer-model';
import customerData from 'src/app/Data/customer.json';
import { MessageboxService } from 'src/app/shared/messagebox.service';

@Component({
  selector: 'app-customer-addnew',
  templateUrl: './customer-addnew.component.html',
  styleUrls: ['./customer-addnew.component.css'],
})
export class CustomerAddnewComponent implements OnInit {
  constructor(private el: ElementRef, private MessageBox: MessageboxService) {}
  Customers: customermodel[] = customerData.customerData;
  ngOnInit(): void {}
  customerForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    cust_name: new FormControl('', [Validators.required]),
    cust_email: new FormControl('', [Validators.required, Validators.email]),
    cust_phone: new FormControl('', [Validators.required]),
    cust_address: new FormControl('', [Validators.required]),
    cust_country: new FormControl('', []),
    cust_active: new FormControl(true),
  });
  onSubmit() {
    // console.warn(this.customerForm.value);
    if (this.customerForm.valid) {
      // console.warn(this.customerForm.value);
      this.Customers.push(this.customerForm.value);

      console.warn(this.Customers);
      this.MessageBox.openSnackBar(
        'New Customer',
        'Data Saved Successfully!!!'
      );
      this.customerForm.reset();
    } else {
    }
  }
}
