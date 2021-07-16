import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { customermodel } from '../../../model/customer-model';
import customerData from 'src/app/Data/customer.json';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit, AfterViewInit {
  initialSelection = [];
  allowMultiSelect = true;
  TotalRows = 0;
  selection = new SelectionModel<customermodel>(
    this.allowMultiSelect,
    this.initialSelection
  );

  @ViewChild('customertable')
  htmlData!: ElementRef;

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
  displayedColumnsFooter: string[] = ['id'];
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

  ngOnInit(): void {
    this.TotalRows = this.dataSource.data.length;
  }
  public doFilter = (event: any) => {
    this.dataSource.filter = event.target.value.trim().toLocaleLowerCase();
  };

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

  public openPDF(): void {
    let DATA: any;
    DATA = document.getElementById('customertable');

    // DATA = this.dataSource.data;
    // console.warn(DATA);
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save('angular-demo.pdf');
    });
  }
}
