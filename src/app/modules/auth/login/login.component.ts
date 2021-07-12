import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthAzureService } from '../auth-azure.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthAzureService
  ) {}

  loginForm!: FormGroup;
  isSubmitted = false;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  get formControls() {
    return this.loginForm.controls;
  }
  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.authService.login(this.loginForm.value)) {
      this.router.navigate(['/crm/']);
      // this.router.navigateByUrl('/crm/');
    }
    //this.router.navigateByUrl('/admin');
  }
  // login(val: any) {
  //   console.log(val);
  //   this.router.navigate(['/crm']);
  // }
  logout() {
    this.router.navigate(['/auth']);
  }
}
