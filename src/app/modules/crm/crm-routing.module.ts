import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './master/component/customer/customer.component';
import { VendorComponent } from './master/component/vendor/vendor.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'vendor',
    component: VendorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrmRoutingModule {}
