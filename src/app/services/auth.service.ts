import { Injectable, signal } from '@angular/core';

export interface AuthCredentials {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'auth_token';
  token = signal<string | null>(localStorage.getItem(this.tokenKey));

  get isAuthenticated() {
    return this.token() !== null;
  }

  private saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
    this.token.set(token);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.token.set(null);
  }

  async login(credentials: AuthCredentials) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => null);
      throw new Error(error?.message || 'Login failed');
    }

    const token = await response.text();
    this.saveToken(token);
    return token;
  }

  async register(credentials: AuthCredentials) {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        const text = await response.text();
        console.error("BACKEND ERROR:", text);
        throw new Error(text);
    }

    return response.json();
  }

  getAuthHeaders() {
    const token = this.token();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }
}
