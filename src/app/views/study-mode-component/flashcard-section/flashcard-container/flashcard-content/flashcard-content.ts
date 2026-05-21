import { Component, HostListener, signal } from '@angular/core';
import { ProgressBar } from "../../../../../components/shared/progress-bar/progress-bar";
import { Tag } from "../../../../../components/shared/tag/tag";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-flashcard-content',
  imports: [ProgressBar, Tag, NgClass],
  templateUrl: './flashcard-content.html',
  styleUrl: './flashcard-content.css',
})
export class FlashcardContent {
  isRevealed = signal(false);

  toggle() {
    this.isRevealed.update(v => !v);
  }

  
  @HostListener('document:keyup.space', ['$event'])
  handleSpace(event: KeyboardEvent | Event) {
    (event as KeyboardEvent).preventDefault();
    this.toggle();
  }

}
