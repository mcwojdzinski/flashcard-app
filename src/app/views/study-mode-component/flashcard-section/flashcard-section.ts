import { Component } from '@angular/core';
import { Button } from "../../../components/shared/button/button";
import { Checkbox } from "../../../components/shared/checkbox/checkbox";
import { FlashcardContainer } from "./flashcard-container/flashcard-container";

@Component({
  selector: 'app-flashcard-section',
  imports: [Button, Checkbox, FlashcardContainer],
  templateUrl: './flashcard-section.html',
  styleUrl: './flashcard-section.css',
})
export class FlashcardSection {}
