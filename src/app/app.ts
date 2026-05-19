import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logo } from './components/shared/logo/logo';
import { Tab } from "./components/shared/tab/tab";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  Logo, Tab],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('flashcard-app');
}
