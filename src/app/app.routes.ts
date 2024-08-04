import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    children: [
      {
        path: '',
        canMatch: [],
        loadComponent: () =>
          import('./pages/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'logout',
        canMatch: [],
        loadComponent: () =>
          import('./pages/logout/logout.component').then((m) => m.LogoutComponent),
      },
      { path: '404',
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
