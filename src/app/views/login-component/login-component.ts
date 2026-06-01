import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Button } from '../../components/shared/button/button';
import { Input } from '../../components/shared/input/input';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { Logo } from "../../components/shared/logo/logo";

@Component({
  selector: 'app-login-component',
  imports: [Input, Button, RouterLink, Logo],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private toastService = inject(ToastService);

  loginValue = signal('');
  passwordValue = signal('');
  loginError = signal(false);
  passwordError = signal(false);
  submissionError = signal('');

  validate() {
    const loginValid = this.loginValue().trim() !== '';
    const passwordValid = this.passwordValue().trim() !== '';
    this.loginError.set(!loginValid);
    this.passwordError.set(!passwordValid);
    return loginValid && passwordValid;
  }

  async onLogin() {
    if (!this.validate()) return;

    try {
      await this.authService.login({
        login: this.loginValue(),
        password: this.passwordValue(),
      });
      this.toastService.success('Logged in successfully.');
      this.router.navigate(['/']);
    } catch (error: any) {
      this.submissionError.set(error?.message || 'Login failed.');
      this.toastService.error(this.submissionError());
    }
  }
}
