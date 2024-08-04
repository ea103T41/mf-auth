import { Routes } from '@angular/router';
import { authGuard } from './share/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/loading/loading.component').then((m) => m.LoadingComponent),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'logout',
        loadComponent: () =>
          import('./pages/logout/logout.component').then((m) => m.LogoutComponent),
      },
      {
        path: '404',
        loadComponent: () =>
          import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
      },
    ]
  },
  { path: 'admin',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  { path: '**', redirectTo: '404' }
];
