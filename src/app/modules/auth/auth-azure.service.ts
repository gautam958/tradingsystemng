import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthAzureService {
  loginRequest = {
    scopes: ['user.read', 'mail.send'], // optional Array<string>
  };
  public logedInUserName: any;
  constructor(private msalService: MsalService) {}
  loginflag = Boolean;
  public async login(userInfo: User) {
    loginflag: false;

    await this.msalService.loginPopup().subscribe(
      (response: AuthenticationResult) => {
        this.msalService.instance.setActiveAccount(response.account);
        this.logedInUserName = response.account?.username;
        console.log(' Login Successfull  ' + response.account?.username);
        loginflag: true;
        localStorage.setItem('ACCESS_TOKEN', response.accessToken);
      },
      (error) => {
        console.log(' Login Error  ' + error);
        loginflag: false;
      }
    );
    return this.loginflag;
  }

  public isLoggedIn() {
    this.logedInUserName =
      this.msalService.instance.getActiveAccount()?.username;
    //return
    this.msalService.instance.getActiveAccount() != null;
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public async logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    await this.msalService.logout();
  }
}
