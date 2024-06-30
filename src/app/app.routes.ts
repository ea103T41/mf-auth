import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: HomeComponent
  },
  { path: 'logout', component: HomeComponent },
  { path: '404', component: HomeComponent },
  { path: '**', redirectTo: '404' }
];
