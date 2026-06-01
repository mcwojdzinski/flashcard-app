import { Routes } from '@angular/router';
import { StudyModeComponent } from './views/study-mode-component/study-mode-component';
import { AllCardsComponent } from './views/all-cards-component/all-cards-component';
import { LoginComponent } from './views/login-component/login-component';
import { RegisterComponent } from './views/register-component/register-component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: StudyModeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'all-cards',
    component: AllCardsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
