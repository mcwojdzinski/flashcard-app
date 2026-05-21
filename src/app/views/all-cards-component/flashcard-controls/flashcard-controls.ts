import { Component } from '@angular/core';
import { Checkbox } from "../../../components/shared/checkbox/checkbox";
import { Button } from "../../../components/shared/button/button";
import { CategoryFilter } from "../../../components/shared/category-filter/category-filter";

@Component({
  selector: 'app-flashcard-controls',
  imports: [ Checkbox, Button, CategoryFilter],
  templateUrl: './flashcard-controls.html',
  styleUrl: './flashcard-controls.css',
})
export class FlashcardControls {}
