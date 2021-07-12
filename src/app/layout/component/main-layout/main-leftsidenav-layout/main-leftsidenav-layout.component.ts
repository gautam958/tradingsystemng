import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthAzureService } from 'src/app/modules/auth/auth-azure.service';

@Component({
  selector: 'app-main-leftsidenav-layout',
  templateUrl: './main-leftsidenav-layout.component.html',
  styleUrls: ['./main-leftsidenav-layout.component.css'],
})
export class MainLeftsidenavLayoutComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: Router,
    private authService: AuthAzureService
  ) {}

  ngOnInit(): void {}

  title = 'RF Website';
  _logedInUserName: any;

  isLoggedIn(): boolean {
    this._logedInUserName = this.authService.logedInUserName;
    return this.authService.isLoggedIn();
    // return true;
  }
  login() {
    // this.authService.login();
    // this._logedInUserName = this.authService.logedInUserName;
    // console.log(
    //   ' sidenav ' +
    //     this._logedInUserName +
    //     '' +
    //     this.authService.logedInUserName
    // );
  }
  logout() {
    this.authService.logout();
  }
  navigatetologin() {
    this.route.navigate(['/']);
  }
}
