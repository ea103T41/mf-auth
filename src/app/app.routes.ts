import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        canMatch: [],
        component: LoginComponent
      },
      {
        path: 'logout',
        canMatch: [],
        component: LogoutComponent
      },
    ]
  },
  { path: 'admin', component: HomeComponent },
  { path: '404', component: HomeComponent },
  { path: '**', redirectTo: '404' }
];
