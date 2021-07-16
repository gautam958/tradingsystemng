import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerListComponent } from './master/component/customer/customer-list/customer-list.component';
import { CustomerComponent } from './master/component/customer/customer.component';
import { VendorComponent } from './master/component/vendor/vendor.component';
import { PendingOrderComponent } from './report/component/pending-order/pending-order.component';
import { CustomerOrderComponent } from './transaction/component/customer-order/customer-order.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'master/customer',
    component: CustomerComponent,
  },
  {
    path: 'master/customer-list',
    component: CustomerListComponent,
  },
  {
    path: 'master/vendor',
    component: VendorComponent,
  },
  {
    path: 'transaction/Customer-Order',
    component: CustomerOrderComponent,
  },
  {
    path: 'rerport/Pending-Order',
    component: PendingOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrmRoutingModule {}
