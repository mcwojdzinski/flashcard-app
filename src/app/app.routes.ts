import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./views/login-component/login-component').then(m => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./views/register-component/register-component').then(m => m.RegisterComponent),
  },
  {
    path: '',
    loadComponent: () => import('./views/study-mode-component/study-mode-component').then(m => m.StudyModeComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'all-cards',
    loadComponent: () => import('./views/all-cards-component/all-cards-component').then(m => m.AllCardsComponent),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
