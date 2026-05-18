import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logo } from './components/logo/logo';
import { Input } from './components/input/input';
import { Textarea } from './components/textarea/textarea';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Logo, Input, Textarea],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('flashcard-app');
}
