import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { CustomerComponent } from './master/component/customer/customer.component';
import { VendorComponent } from './master/component/vendor/vendor.component';
import { CustomerOrderComponent } from './transaction/component/customer-order/customer-order.component';
import { PendingOrderComponent } from './report/component/pending-order/pending-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerListComponent } from './master/component/customer/customer-list/customer-list.component';
import { CustomerAddnewComponent } from './master/component/customer/customer-addnew/customer-addnew.component';
import { MaterialModules } from 'src/app/shared/MaterialModules';
import { FormDirective } from './form.directive';
import { MatTableExporterModule } from 'mat-table-exporter';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    CustomerComponent,
    VendorComponent,
    CustomerOrderComponent,
    PendingOrderComponent,
    CustomerListComponent,
    CustomerAddnewComponent,
    FormDirective,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    CrmRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModules,
    MatTableExporterModule,
  ],
})
export class CrmModule {}
