import { Component } from '@angular/core';
import { Button } from "../../../components/shared/button/button";
import { Checkbox } from "../../../components/shared/checkbox/checkbox";
import { FlashcardContainer } from "./flashcard-container/flashcard-container";
import { CategoryFilter } from "../../../components/shared/category-filter/category-filter";

@Component({
  selector: 'app-flashcard-section',
  imports: [Button, Checkbox, FlashcardContainer, CategoryFilter],
  templateUrl: './flashcard-section.html',
  styleUrl: './flashcard-section.css',
})
export class FlashcardSection {}
