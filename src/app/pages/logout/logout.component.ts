import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../share/auth/auth.service';
import { ReferrerService } from '../../share/referrer.service';
import { ImageUrlService } from '../../share/image-url.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  imagePath: string = '/assets/images/sign-out.png';
  refererUrl: string = '/';
  errorMessage: string = '';

  constructor(
    private readonly router: Router,
    private readonly authSvc: AuthService,
    private readonly referrerSvc: ReferrerService,
    private readonly imageUrlService: ImageUrlService,
  ) {}

  ngOnInit(): void {
    const referer = this.referrerSvc.getReferrer();
    console.log(referer);

    if (referer) {
      this.refererUrl = referer.url;
    } else {
      this.handleError('來源 URL 參數丟失或無效');
    }

    // 如果未登入
    if (!this.authSvc.isLogged) {
      this.router.navigate(['/', { referrer: this.refererUrl } ]);
    }
  }

  get imageUrl(): string {
    return this.imageUrlService.getImageUrl(this.imagePath);
  }

  logout(): void {
    this.authSvc.logout();
    window.location.href = this.refererUrl;
    console.log('See You Next!!!');
  }

  cancel(): void {
    this.router.navigate(['../']); // 返回到上一頁
  }

  private handleError(message: string) {
    this.errorMessage = message;
  }
}
