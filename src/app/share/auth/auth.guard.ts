import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ReferrerService } from '../referrer.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authSvc = inject(AuthService);
  const referrerSvc = inject(ReferrerService);

  const currentUrl = state.url;
  // console.log('目標 URL:', currentUrl);

  const referrerUrl = route.queryParams['referrer'];

  if (referrerUrl) {
    // console.log('來源 URL:', referrerUrl);
    referrerSvc.setReferrer(referrerUrl);
  }

  if (!authSvc.isLogged) {
    // 確認當前 URL 不為登入頁面 (避免重定向到登入頁面後再重定向回來)
    if (!currentUrl.includes('/login')) {
      return router.createUrlTree(['/login'], { queryParams: { referrer: currentUrl } });

    } else {
      // 當前是登入頁面，允許訪問
      return true;
    }
  }
  // 已登入，允許訪問
  return true;
}

export const isAdmin: CanActivateFn = (route, segments) => {
  // 檢查是否為管理者
  if (localStorage.getItem('role') === 'admin') {
    return true;
  }
  return false;
};

