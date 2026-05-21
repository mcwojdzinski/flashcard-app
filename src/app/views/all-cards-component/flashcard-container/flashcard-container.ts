import { Component } from '@angular/core';
import { Flashcard } from "./flashcard/flashcard";

@Component({
  selector: 'app-flashcard-container',
  imports: [Flashcard],
  templateUrl: './flashcard-container.html',
  styleUrl: './flashcard-container.css',
})
export class FlashcardContainer {}
