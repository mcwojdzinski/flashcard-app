import { Component } from '@angular/core';
import { Button } from "../../../components/shared/button/button";
import { Checkbox } from "../../../components/shared/checkbox/checkbox";

@Component({
  selector: 'app-flashcard-section',
  imports: [Button, Checkbox],
  templateUrl: './flashcard-section.html',
  styleUrl: './flashcard-section.css',
})
export class FlashcardSection {}
