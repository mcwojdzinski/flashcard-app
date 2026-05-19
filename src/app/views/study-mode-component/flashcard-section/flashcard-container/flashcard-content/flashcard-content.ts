import { Component } from '@angular/core';
import { ProgressBar } from "../../../../../components/shared/progress-bar/progress-bar";
import { Tag } from "../../../../../components/shared/tag/tag";

@Component({
  selector: 'app-flashcard-content',
  imports: [ProgressBar, Tag],
  templateUrl: './flashcard-content.html',
  styleUrl: './flashcard-content.css',
})
export class FlashcardContent {}
