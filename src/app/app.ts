import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logo } from './components/shared/logo/logo';
import { Tab } from "./components/shared/tab/tab";
import { Dialog } from './components/shared/dialog/dialog';
import { Toast } from './components/shared/toast/toast';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Logo, Tab, Dialog, Toast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('flashcard-app');
}
