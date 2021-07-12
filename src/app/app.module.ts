import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './shared/MaterialModules';
import { LandingLayoutComponent } from './layout/component/landing-layout/landing-layout.component';
import { MainLayoutComponent } from './layout/component/main-layout/main-layout.component';
import { MainHeaderLayoutComponent } from './layout/component/main-layout/main-header-layout/main-header-layout.component';
import { MainContentLayoutComponent } from './layout/component/main-layout/main-content-layout/main-content-layout.component';
import { MainRightsidenavLayoutComponent } from './layout/component/main-layout/main-rightsidenav-layout/main-rightsidenav-layout.component';
import { MainFooterLayoutComponent } from './layout/component/main-layout/main-footer-layout/main-footer-layout.component';
import { MainLeftsidenavLayoutComponent } from './layout/component/main-layout/main-leftsidenav-layout/main-leftsidenav-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';

import {
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: 'a5ae7961-4a20-46ba-aa21-d09d3b53f73b',
      redirectUri: 'http://localhost:4200/crm/',
      postLogoutRedirectUri: 'http://localhost:4200/auth/',
    },
  });
}
@NgModule({
  declarations: [
    AppComponent,
    LandingLayoutComponent,
    MainLayoutComponent,
    MainHeaderLayoutComponent,
    MainContentLayoutComponent,
    MainRightsidenavLayoutComponent,
    MainFooterLayoutComponent,
    MainLeftsidenavLayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MsalModule,
    BrowserAnimationsModule,
    MaterialModules,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    MsalService,
  ],
  bootstrap: [AppComponent],
  exports: [MaterialModules, FormsModule, ReactiveFormsModule],
})
export class AppModule {}
