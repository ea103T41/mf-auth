import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../share/auth/auth.service';
import { ReferrerService } from '../../share/referrer.service';
import { User } from '../../models/user';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  toastComponent: any;
  refererUrl: string = '/';

  @ViewChild('loginForm')
  loginForm!: NgForm;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly referrerSvc: ReferrerService,
  ) {}

  ngOnInit() {
    const referer = this.referrerSvc.getReferrer();
    console.log(referer);

    if (referer) {
      this.refererUrl = referer.url;
    } else {
      this.handleError('來源 URL 參數丟失或無效');
    }

    // 如果已登入
    if (this.authService.isLogged) {
      this.router.navigate([this.refererUrl]);
    }
  }

  login(user: User) {
    this.authService.login(user);
    window.location.href = this.refererUrl;
  }

  private handleError(message: string) {
    this.errorMessage = message;
  }

  private clearForm() {
    this.loginForm.resetForm();
  }

}
