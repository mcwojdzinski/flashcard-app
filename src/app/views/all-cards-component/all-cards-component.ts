import { Component } from '@angular/core';
import { CreateNewCard } from "./create-new-card/create-new-card";
import { FlashcardControls } from "./flashcard-controls/flashcard-controls";
import { FlashcardContainer } from "./flashcard-container/flashcard-container";

@Component({
  selector: 'app-all-cards-component',
  imports: [CreateNewCard, FlashcardControls, FlashcardContainer],
  templateUrl: './all-cards-component.html',
  styleUrl: './all-cards-component.css',
})
export class AllCardsComponent {}
