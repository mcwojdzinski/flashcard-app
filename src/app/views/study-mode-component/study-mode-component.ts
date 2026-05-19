import { Component } from '@angular/core';
import { StatisticsSection } from "./statistics-section/statistics-section";
import { FlashcardSection } from "./flashcard-section/flashcard-section";

@Component({
  selector: 'app-study-mode-component',
  imports: [StatisticsSection, FlashcardSection],
  templateUrl: './study-mode-component.html',
  styleUrl: './study-mode-component.css',
})
export class StudyModeComponent {}
