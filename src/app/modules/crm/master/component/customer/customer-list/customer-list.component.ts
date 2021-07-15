import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { customermodel } from '../../../model/customer-model';
import customerData from 'src/app/Data/customer.json';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit, AfterViewInit {
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<customermodel>(
    this.allowMultiSelect,
    this.initialSelection
  );

  constructor() {
    console.log('Reading local json files');

    console.log(this.Customers);
  }

  displayedColumns: string[] = [
    'select',
    'id',
    'cust_name',
    'cust_email',
    'cust_phone',
    'cust_address',
    'cust_country',
    'cust_active',
  ];
  Customers: customermodel[] = customerData.customerData;
  dataSource = new MatTableDataSource<customermodel>(this.Customers);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {}

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
}
