import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Input } from '../../components/shared/input/input';
import { Button } from '../../components/shared/button/button';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { Logo } from "../../components/shared/logo/logo";

@Component({
  selector: 'app-register-component',
  imports: [Input, Button, RouterLink, Logo],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {
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

  async onRegister() {
    if (!this.validate()) return;

    try {
      await this.authService.register({
        login: this.loginValue(),
        password: this.passwordValue(),
      });
      this.toastService.success('Registration successful. Please log in.');
      this.router.navigate(['/login']);
    } catch (error: any) {
      this.submissionError.set(error?.message || 'Registration failed.');
      this.toastService.error(this.submissionError());
    }
  }
}
