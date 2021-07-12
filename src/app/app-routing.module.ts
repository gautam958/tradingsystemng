import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAuthGuard } from './app-auth.guard';
import { LandingLayoutComponent } from './layout/component/landing-layout/landing-layout.component';
import { MainLayoutComponent } from './layout/component/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'crm',
    canActivate: [AppAuthGuard],
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./modules/crm/crm.module').then((m) => m.CrmModule),
  },
  // {
  //   path: 'crm/customer',
  //   component: MainLayoutComponent,
  //   loadChildren: () => import('./crm/crm.module').then((m) => m.CrmModule),
  // },
  // {
  //   path: 'crm/vendor',
  //   component: MainLayoutComponent,
  //   loadChildren: () => import('./crm/crm.module').then((m) => m.CrmModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
