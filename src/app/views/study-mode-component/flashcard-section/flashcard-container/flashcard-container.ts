import { Component } from '@angular/core';
import { FlashcardContent } from "./flashcard-content/flashcard-content";
import { Button } from '../../../../components/shared/button/button';

@Component({
  selector: 'app-flashcard-container',
  imports: [FlashcardContent, Button],
  templateUrl: './flashcard-container.html',
  styleUrl: './flashcard-container.css',
})
export class FlashcardContainer {}
