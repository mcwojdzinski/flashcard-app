import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logo } from './components/logo/logo';
import { Input } from './components/input/input';
import { Textarea } from './components/textarea/textarea';
import { Button } from "./components/button/button";
import { ProgressBar } from "./components/progress-bar/progress-bar";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Logo, Input, Textarea, Button, ProgressBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('flashcard-app');
}
