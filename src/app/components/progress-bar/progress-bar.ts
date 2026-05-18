import { Component, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar {
  progress = input<0 | 1 | 2 | 3 | 4 | 5 >(1);
}
